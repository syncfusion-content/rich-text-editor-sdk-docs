---
layout: post
title: Real-Time Collaboration in JavaScript Block Editor | Syncfusion
description: Enable real-time collaborative editing in the Block Editor component of Syncfusion Essential JS 2 with user presence and version history.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Real-Time Collaboration in JavaScript Block Editor control

The Block Editor supports real-time collaborative editing, enabling multiple users to work on the same document simultaneously. Collaboration is powered by [**Yjs**](https://yjs.dev/), an open-source Conflict-free Replicated Data Type (CRDT) framework that synchronizes document changes across all connected users and automatically resolves conflicts.

With collaboration enabled, users can:

* Edit the same document in real time.
* View remote user cursors and selections.
* Track active collaborators.
* Perform collaboration-aware undo and redo operations.
* Create, restore, compare, export, and import document versions.

{% doccards %}
{% doccard text="Live Demo" link="https://ej2.syncfusion.com/showcase/javascript/blockeditor-collaborative-editing/" %}
{% enddoccards %}

## Quick Start

Get real-time collaboration working in just a few minutes using `y-websocket` and a simple WebSocket server in our Block Editor component.

### Step 1: Set up a basic Javascript Block Editor component

Follow the [Getting Started guide](https://help.syncfusion.com/rich-text-editor-sdk/javascript/block-editor/es5-getting-started) to create a Javascript project with the Block Editor component. This ensures you have all required dependencies and the correct project structure before adding collaboration.

### Step 2: Creation of Yjs and Websocket provider bundle file using esbuild

A Yjs provider handles the transport of document updates between connected users. Choose a provider based on your deployment requirements.

See [Yjs Providers](https://docs.yjs.dev/ecosystem/connection-provider) to choose the right provider for your use case.

| Provider | Type | Use Case |
| -------- | ---- | -------- |
| [y-websocket](https://docs.yjs.dev/ecosystem/connection-provider/y-websocket) | Self-hosted | Production deployments with your own WebSocket server. |
| `y-webrtc` | Peer-to-peer | Quick local testing and development; no server required. |
| `y-indexeddb` | Local storage | Offline persistence within a single browser. |
| [Hocuspocus](https://tiptap.dev/docs/hocuspocus/getting-started/overview) | Open-source server | Scalable Node.js server with pluggable storage and Redis support. |
| [Liveblocks](https://liveblocks.io/) | Fully managed | Hosted WebSocket infrastructure with REST API and DevTools. |
| [PartyKit](https://www.partykit.io/) | Serverless | Serverless provider on Cloudflare; ideal for prototyping. |

- In project, create a folder for bundle creation.
- Inside the folder, Initialize npm:

```powershell
npm init -y
```

- Install Dependencies:

```powershell
npm install esbuild yjs y-websocket --save-dev
```

- Create a file named `yjs-entry.js`.

```js
// yjs-entry.js
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

// Expose to global scope
window.Y = Y;
window.WebsocketProvider = WebsocketProvider;

console.log('Yjs and WebsocketProvider loaded globally');
```

- Generate the bundle by running the following command:

```powershell
npx esbuild yjs-entry.js --bundle --format=iife --outfile=yjs-bundle.js
```

- Bundle file named `yjs-bundle.js` will be generated.
- Copy `yjs-bundle.js` to your project folder and use in HTML:

```html
<script src="yjs-bundle.js"></script>
```
Install the required libraries using npm:

```powershell
npm install yjs y-websocket
```

### Step 3: Create a simple WebSocket server

Create a folder named `server` and initialize npm:

```powershell
npm init -y
```

Install the WebSocket server package in `server` folder:

```powershell
npm install @y/websocket-server
```

#### Run the WebSocket Server

Open terminal in `server` folder:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

set HOST=localhost&& set PORT=1234&& npx y-websocket

{% endhighlight %}
{% highlight bash tabtitle="Powershell" %}

$env:HOST="localhost"; $env:PORT="1234"; npx y-websocket

{% endhighlight %}
{% endtabs %}

You should see the message:

```
running at 'localhost' on port 1234
```

### Step 4: Create a collaboration configuration file

- Create a shared Yjs document and XML fragment.
- The `yjs` amd `WebsocketProvider` will be accessed from bundled globals.
- Create an adapter that provides the Yjs runtime and the shared fragment to the Block Editor.
- Create a provider that connects users to the same shared document.

Create a `collaboration.js` file in your project add the following code to configure the Yjs document, provider, collaboration adapter and room allocation logic.

```js
// Access from bundled globals
var Y = window.Y;
var WebsocketProvider = window.WebsocketProvider;

// Get or create room name
var roomName = getRoomName();

// Create a shared Yjs document for collaborative editing
var yDoc = new Y.Doc();
var yFragment = yDoc.getXmlFragment('blockeditor');

// Create adapter that provides Yjs runtime and shared fragment
var adapter = {
    yRuntime: Y,
    yXmlFragment: yFragment
};

// Create WebSocket provider for real-time synchronization
// Connects to local WebSocket server on port 1234
var provider = new WebsocketProvider(
    'ws://localhost:1234',
    roomName,
    yDoc
);

/**
 * Get or create room ID and store in URL hash
 */
function getRoomName() {
    // Check if room ID exists in URL hash
    var roomId = getRoomIdFromHash();

    // If no room ID in hash, generate a new one
    if (!roomId) {
        roomId = generateRoomId();
        setRoomIdInHash(roomId);
    }

    return roomId;
}

/**
 * Get room ID from URL hash
 */
function getRoomIdFromHash() {
    var hash = window.location.hash.substring(1);
    return hash || null;
}

/**
 * Generate a unique 5-character room ID
 */
function generateRoomId() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var roomId = '';

    for (var i = 0; i < 5; i++) {
        roomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return roomId;
}

/**
 * Set room ID in URL hash
 */
function setRoomIdInHash(roomId) {
    window.location.hash = roomId;
}
```

Add below script on Html file:

```html
<script src="collaboration.js"></script>
```


### Step 5: Set up the Block Editor with collaboration

- Use the `collaborationSettings` property to configure collaboration settings for your Block Editor.
- It provides properties such as `provider`, `enableAwareness`, `adapter` and `versionHistory` which allows to customize the collaboration behavior.
- Pass the adapter and provider to the Block Editor through the `collaborationSettings` property.
- Set `enableAwareness` to `true` in `collaborationSettings` property to display remote cursors, text selection overlays, and user details on hover.

In your `index.js` file, replace the existing Block Editor with the following code:

```js
var blockeditor = new ej.blockeditor.BlockEditor({
    collaborationSettings: {
        adapter: adapter,
        provider: provider,
        enableAwareness: true
    }
});

blockeditor.appendTo('#blockeditor_default');
```

Ensure that the following scripts are included in `index.html`:

```html
<script src="yjs-bundle.js"></script>
<script src="collaboration.js"></script>
```

### Step 6: Test the collaboration
 
In your project, run the `index.html` in web browser.
 
> **Important:** Make sure your WebSocket server is still running in another terminal window.
 
2. **Open a tab and duplicate it** with your Javascript application
3. **Type in one window** — you should see the text appear in the other window instantly

If the text appears in both tabs, **real-time collaboration is achieved.**

> **Note:** The BroadcastChannel mechanism only handles synchronization locally across tabs of the same browser. To synchronize data across entirely different browsers (e.g., Chrome to Firefox), you must utilize the WebSocket provider layer and connect both environments to a properly configured, centralized backend WebSocket server.

## Configure the current user

Set the current user's display name and cursor highlight color using the `users` and `currentUserId` properties. The `avatarBgColor` value is used for that user's remote cursor and text selection overlay. The users property includes `id`, `user` and `avatarBgColor`.

```js
var blockEditor = new ej.blockeditor.BlockEditor({
    users: [{
        id: 'user-1',
        user: 'John Doe',
        avatarBgColor: '#e74c3c'
    }],
    currentUserId: 'user-1'
});
```

### Get active users

Retrieve all currently connected users using the `users` property in the block editor.

```js
var users = ej.blockeditor.users;
```

## Version history

`Version History` allows you to capture document snapshots and restore earlier versions. This is a built-in capability of the Block Editor and does not require a third-party service.

### Enable version history

- Version snapshots need to be persisted to enable version history across browser sessions.
- Implement the `IVersionStorage` interface to provide a custom storage backend for managing snapshots. You can use IndexedDB, a backend database, or any other storage solution suitable for your deployment.
- The `IVersionStorage` interface defines the following methods:

| Method | Signature | Description |
| -------- | -------- | ----------- |
| `saveSnapshot` | `(snapshot: VersionSnapshot): Promise<void>` | Persist a snapshot. |
| `loadAllSnapshots` | `(): Promise<VersionSnapshot[]>` | Load all persisted snapshots, ordered by timestamp ascending. |
| `loadSnapshot` | `(id: string): Promise<VersionSnapshot \| null>` | Load a single snapshot by id. |
| `deleteSnapshot` | `(id: string): Promise<void>` | Permanently remove a snapshot by id. |
| `clearAll` | `(): Promise<void>` | Remove all snapshots from storage. |

- After the Block Editor initializes, retrieve the version history instance and wait for snapshot data to load before calling any version history methods.

Before that need to create a storage service for snapshots.
- Create `versionHistoryService.js` with `IndexedDBVersionStorage` class
- This class implements `IVersionStorage` interface (required by Syncfusion)

Make Storage Room-Specific by using roomName from `collaboration.js` to make each room gets its own isolated snapshot database.

Create a `versionHistoryService.js` file in the src folder, replace the `index.js` file to configure the BlockEditorComponent, and replace the `index.css` file with the styles required for the version history panel.

{% tabs %}
{% highlight js tabtitle="index.js" %}
// Version storage for the current collaboration room
var myStorage = new IndexedDBVersionStorage('blockeditor-versions-' + roomName);

// Create Block Editor
var blockEditor = new ej.blockeditor.BlockEditor({
    collaborationSettings: {
        adapter: adapter,
        provider: provider,
        versionHistory: {
            storage: myStorage,
            snapshotInterval: 3000
        }
    }
});
blockEditor.appendTo('#blockeditor_default');

// Update version history panel periodically
setInterval(function () {
    updateSnapshots();
}, 2000);

/**
 * Refresh version history panel
 */
function updateSnapshots() {
    var versionHistory = blockEditor.getVersionHistory();
    if (!versionHistory) {
        return;
    }

    var snapshots = versionHistory.getSnapshots();
    var panel = document.getElementById('version-history-panel');
    if (!panel) {
        return;
    }

    if (snapshots.length === 0) {
        panel.innerHTML =
            '<h3>Snapshots (0)</h3>' +
            '<p>No snapshots yet...</p>';
        return;
    }

    var html =
        '<h3>Snapshots (' + snapshots.length + ')</h3>' +
        '<div class="snapshots-container">';

    snapshots.forEach(function (snapshot) {
        html +=
            '<div class="snapshot-item">' +
                '<div class="snapshot-timestamp">' +
                    new Date(snapshot.lastModifiedAt).toLocaleString() +
                '</div>' +
                '<div class="snapshot-actions">' +
                    '<button class="restore-btn" onclick="restoreSnapshot(\'' + snapshot.id + '\')">Restore</button>' +
                    '<button class="delete-btn" onclick="deleteSnapshot(\'' + snapshot.id + '\')">Delete</button>' +
                '</div>' +
            '</div>';
    });
    html += '</div>';
    panel.innerHTML = html;
}

/**
 * Restore a snapshot
 */
function restoreSnapshot(id) {
    var versionHistory = blockEditor.getVersionHistory();
    if (versionHistory) {
        versionHistory.restoreSnapshot(id);
    }
}

/**
 * Delete a snapshot
 */
function deleteSnapshot(id) {
    var versionHistory = blockEditor.getVersionHistory();
    if (versionHistory) {
        versionHistory.deleteSnapshot(id);
    }
}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - BlockEditor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="Essential JS 2">
    <meta name="author" content="Syncfusion">
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet"/>
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-blockeditor/styles/tailwind3.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="index.css" rel="stylesheet">

    <script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/dist/ej2.min.js" type="text/javascript"></script>
</head>

<body>
    <div class="app-container">
        <div class="editor-section">
            <div id="blockeditor_default"></div>
        </div>

        <div id="version-history-panel" class="version-history-panel">
            <h3>Snapshots (0)</h3>
            <p>No snapshots yet...</p>
        </div>
    </div>

    <script src="yjs-bundle.js"></script>
    <script src="collaboration.js"></script>
    <script src="versionHistoryService.js"></script>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>
{% endhighlight %}
{% highlight ts tabtitle="versionHistoryService.js" %}
class IndexedDBVersionStorage {
    constructor(dbName) {
        this.db = null;

        this.initPromise = new Promise((resolve) => {
            var req = indexedDB.open(dbName, 1);

            req.onsuccess = () => {
                this.db = req.result;
                resolve();
            };

            req.onupgradeneeded = (e) => {
                var db = e.target.result;

                if (!db.objectStoreNames.contains('snapshots')) {
                    db.createObjectStore('snapshots', {
                        keyPath: 'id'
                    });
                }
            };
        });
    }

    exec(mode, fn) {
        return this.initPromise.then(() => {
            return new Promise((resolve, reject) => {
                var tx = this.db.transaction('snapshots', mode);
                var req = fn(tx.objectStore('snapshots'));

                req.onsuccess = function () {
                    resolve(req.result);
                };

                req.onerror = function () {
                    reject(req.error);
                };
            });
        });
    }

    saveSnapshot(snapshot) {
        return this.exec('readwrite', function (store) {
            return store.put(snapshot);
        });
    }

    loadAllSnapshots() {
        return this.exec('readonly', function (store) {
            return store.getAll();
        });
    }

    loadSnapshot(id) {
        return this.exec('readonly', function (store) {
            return store.get(id);
        });
    }

    deleteSnapshot(id) {
        return this.exec('readwrite', function (store) {
            return store.delete(id);
        });
    }

    clearAll() {
        return this.exec('readwrite', function (store) {
            return store.clear();
        });
    }
}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
.app-container {
    display: flex;
    gap: 20px;
    padding: 20px;
}

.editor-section {
    flex: 1;
}

.version-history-panel {
    width: 350px;
    padding: 15px;
    border: 1px solid #ddd;
}

.snapshots-container {
    max-height: 600px;
    overflow-y: auto;
}

.snapshot-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #eee;
}

.snapshot-timestamp {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
}

.snapshot-actions {
    display: flex;
    gap: 5px;
}

.snapshot-actions button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    color: white;
}

.restore-btn {
    background-color: #007bff;
}

.delete-btn {
    background-color: #dc3545;
}
{% endhighlight %}
{% endtabs %}

Once done, run to see versionHistory panel for individual rooms.

### Methods

The following are the methods available in the `IVersionHistory`:

#### Create a snapshot

Creates a new snapshot of the current document state with an optional label and metadata.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
var snapshot = await versionHistory.createSnapshot({
    label: 'Before major update',
    modifiedBy: currentUserId
});
```

#### List snapshots

Retrieves all saved snapshots or a paginated subset. Snapshots are returned in chronological order.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
// Retrieve all snapshots
var snapshots = versionHistory.getSnapshots();

// Retrieve a paginated subset — getSnapshots(skip, take)
var snapshots = versionHistory.getSnapshots(20, 40);
```

#### Rename a snapshot

Updates the label or metadata of an existing snapshot without modifying its content.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
await versionHistory.renameSnapshot(snapshotId, 'Release Candidate');
```

#### Restore a snapshot

Reverts the document to a previously saved snapshot state. The current document state is automatically backed up before restoration.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
await versionHistory.restoreSnapshot(snapshotId);
```

> **Note:** When a snapshot is restored, the current document state is automatically 
> backed up before the restore operation is applied.

#### Compare versions

Compares two snapshots to identify differences such as added, removed, or modified content.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
var diff = versionHistory.compareVersions(snapshotIdA, snapshotIdB);
```

The returned `VersionDiff` object provides a summary of the differences between the two selected versions.

#### Export a snapshot

Serializes a snapshot into a portable format that can be stored externally or transferred between systems.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
var exported = await versionHistory.exportSnapshot(snapshotId);
```

Exported snapshots can be stored externally or transferred between systems.

#### Import a snapshot

Imports a previously exported snapshot back into the version history storage.

```js
var versionHistory = ej.blockeditor.getVersionHistory();
var imported = await versionHistory.importSnapshot(exported);
```

### Events

Use the following event callbacks in `versionHistory` settings to respond to snapshot life cycle events.

#### snapshotCreated

Triggered when a new snapshot is created.

```js
var blockEditor = new ej.blockeditor.BlockEditor({
    collaborationSettings: {
        versionHistory: {
            storage: myStorage,
            snapshotCreated: function (args) {
                console.log(args.snapshot.id);
            }
        }
    }
});
```

#### snapshotRestored

Triggered when a snapshot is restored.

```js
var blockEditor = new ej.blockeditor.BlockEditor({
    collaborationSettings: {
        versionHistory: {
            storage: myStorage,
            snapshotRestored: function (args) {
                console.log(args.snapshot.label);
            }
        }
    }
});
```
