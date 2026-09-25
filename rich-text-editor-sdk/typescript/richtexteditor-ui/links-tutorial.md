# Working with Links in RichTextEditor - Tutorial

## Introduction

Links are one of the most powerful features in digital content. They connect your readers to additional resources, websites, email addresses, and phone numbers—making your content interactive and engaging.

The Syncfusion RichTextEditor makes it easy to insert, manage, and customize links without touching code. Whether you're creating blog posts, articles, newsletters, or any rich text content, this tutorial will guide you through every aspect of working with links.

---

## 1. Config: Link Configuration Setup

Before you start creating links, it's helpful to understand the configuration options available. Link configuration controls how the editor handles URLs, protocols, and link creation.

### Understanding Link Configuration

Link configuration in RichTextEditor manages:

- **Default Protocol** — What protocol (like `https://`) is automatically added to URLs
- **Allowed Protocols** — Which types of URLs the editor accepts (web links, emails, phone numbers, etc.)
- **Auto-Linking** — Whether the editor automatically converts URLs and email addresses into links
- **Paste Behavior** — What happens when you paste a URL over selected text

### Default Configuration

By default, RichTextEditor comes with sensible settings:

| Setting | Default Value | What It Does |
|---------|---------------|--------------|
| **Auto-prepend Protocol** | Enabled | Automatically adds `https://` to URLs without a protocol |
| **Default Protocol** | `https` | Uses secure HTTPS for URLs that need a protocol added |
| **Default Target** | `_blank` | Opens links in a new browser tab |
| **Allowed Protocols** | `http`, `https`, `mailto`, `tel` | Accepts web links, emails, and phone numbers |
| **Link on Paste** | Enabled | Converts pasted URLs into links |

### Why These Defaults Matter

These defaults are designed to:

- **Improve security** by using HTTPS instead of HTTP
- **Prevent confusion** by auto-completing incomplete URLs
- **Preserve focus** by opening links in new tabs (keeping your content visible)
- **Support common use cases** like web links, emails, and phone numbers

---

## 2. Paste Link as Text: Converting Pasted URLs into Links

One of the most convenient features in RichTextEditor is the ability to paste a URL over selected text and automatically create a link. This section explains how to use this feature effectively.

### What "Link on Paste" Means

**Link on Paste** is a setting that automatically converts a URL you paste over selected text into a clickable link. Instead of replacing your text with the URL, the URL becomes the destination, and your text remains visible.

### Example Scenario

Imagine you have this text in your editor:

```
Visit our website for more information.
```

Now you want to make "our website" clickable:

1. **Select the text** "our website"
2. **Copy a URL** (for example: `https://example.com`)
3. **Paste the URL** over the selected text
4. **Result**: "our website" becomes a clickable link to `https://example.com`

### How to Paste a Link as Text: Step-by-Step

#### Step 1: Select the Text You Want to Link

- Click at the beginning of the text you want to link
- Drag to select the entire phrase
- Example: Select "Click here" in "Click here for more details"

#### Step 2: Copy the URL You Want to Use

- In another tab or window, copy the URL you want to link to
- Common URLs include:
  - `https://example.com` (websites)
  - `mailto:contact@example.com` (email addresses)
  - `tel:+1-555-123-4567` (phone numbers)

#### Step 3: Paste the URL

- With your text still selected, paste the URL
- Use `Ctrl+V` (Windows/Linux) or `Cmd+V` (Mac)

#### Step 4: Confirm

- The text you selected becomes the link text
- The URL you pasted becomes the destination
- Your original text is preserved as the visible link label

### Visual Walkthrough

```
BEFORE:
┌──────────────────────────────────────────────┐
│ For more information, visit our website.     │
│                        ^^^^^^^^^^^^^^        │
│                      (selected text)         │
└──────────────────────────────────────────────┘

AFTER pasting https://example.com:
┌──────────────────────────────────────────────┐
│ For more information, visit [our website].   │
│                            ^^^^^^^^^^^^^^^^^ │
│                      (now a link)            │
└──────────────────────────────────────────────┘
```

### Disabling "Link on Paste"

If you don't want URLs to automatically become links when pasted:

1. Open the RichTextEditor configuration
2. Find the **Link Settings** section
3. Set **linkOnPaste** to `false`
4. Now pasting a URL will insert the URL as plain text, not a link

---

## 3. Always Open Link in New Tab: Configuring Link Target Behavior

By default, links in RichTextEditor open in a new browser tab. This section explains why, how to configure this behavior, and what other options are available.

### What "Open in New Tab" Means

When you click a link, the browser needs to know where to display the target page:

- **New Tab** (`_blank`) — The link opens in a new browser tab, keeping your original content visible
- **Same Tab** (`_self`) — The link replaces the current page
- **Parent Frame** (`_parent`) — For advanced use only; navigates to the parent frame
- **Top Frame** (`_top`) — For advanced use only; navigates to the top frame

### Why New Tab Is the Default

RichTextEditor defaults to opening links in a new tab (`_blank`) because:

- **Preserves context** — Readers can keep your content open while exploring the link
- **User-friendly** — Readers aren't "stuck" on the linked page
- **Best practice** — Most web content uses new tabs for external links
- **Reduces confusion** — Users always know where to return to

### How to Configure Link Target: Step-by-Step

#### For Application Developers (Configuration Level)

If you're configuring RichTextEditor for your application, you can set the default target:

**Option 1: All links open in new tab (default)**
```typescript
linkSettings: {
    defaultTarget: '_blank'  // Opens in new tab
}
```

**Option 2: All links open in same tab**
```typescript
linkSettings: {
    defaultTarget: '_self'  // Opens in same tab
}
```

**Option 3: No target specified (browser default)**
```typescript
linkSettings: {
    defaultTarget: ''  // Browser decides
}
```

#### For End Users (Per-Link Configuration)

When you insert a link through the link dialog:

1. Click the **Link** button in the toolbar
2. Enter the URL you want to link to
3. Look for the **Target** or **Open in** option
4. Choose from the available targets:
   - **New Tab** — Opens in a new browser tab
   - **Same Tab** — Opens in the current tab
   - **Default** — Lets the browser decide
5. Click **Insert** to create the link

### Target Options Explained

| Target | HTML Value | Behavior |
|--------|-----------|----------|
| **New Tab** | `_blank` | Opens in a new browser tab (default) |
| **Same Tab** | `_self` | Opens in the current tab, replacing your content |
| **Parent Frame** | `_parent` | Advanced: navigates to the parent frame |
| **Top Frame** | `_top` | Advanced: navigates to the top-most frame |
| **No Target** | (none) | Browser decides based on its settings |

### When to Use Each Target

- **New Tab (`_blank`)** — Use for external links, resources, references
  - Example: "Learn more about TypeScript (opens in new tab)"

- **Same Tab (`_self`)** — Use for internal navigation within your application
  - Example: Links between pages of your own website

- **No Target** — Use for links to pages that should replace the current view
  - Example: Navigation within a single-page application

---

## 4. Configure Available Protocols: Accepting Different Types of Links

A protocol is the beginning part of a URL that tells the browser what kind of resource it is. This section explains how to configure which protocols RichTextEditor accepts.

### Understanding URL Protocols

A protocol appears at the start of a URL and tells the browser what to do:

```
https://example.com
^^^^^^
Protocol (secure web)

mailto:user@example.com
^^^^^^
Protocol (email)

tel:+1-555-123-4567
^^^
Protocol (telephone)
```

### Common Protocols

| Protocol | Used For | Example |
|----------|----------|---------|
| **http** | Unsecure websites | `http://example.com` |
| **https** | Secure websites | `https://example.com` |
| **mailto** | Email links | `mailto:contact@example.com` |
| **tel** | Phone number links | `tel:+1-555-123-4567` |
| **ftp** | File transfer | `ftp://files.example.com` |
| **file** | Local files | `file:///C:/Documents/` |

### Default Allowed Protocols

By default, RichTextEditor accepts these protocols:

- `http` — Unsecure web links
- `https` — Secure web links (recommended)
- `mailto` — Email links
- `tel` — Phone number links

This default set covers the most common link types while blocking potentially unsafe protocols.

### What Happens with Disallowed Protocols

If a URL uses a protocol that's not in the allowed list:

- The link **cannot be created** in the editor
- An error message appears (e.g., "Protocol not allowed")
- You must use an allowed protocol instead

### Step-by-Step: Configure Allowed Protocols

#### For Application Developers

If you're configuring RichTextEditor for your application:

**Example 1: Web links only (no emails or phone numbers)**
```typescript
linkSettings: {
    allowedProtocols: ['http', 'https']
}
```

**Example 2: Web and email links (no phone numbers)**
```typescript
linkSettings: {
    allowedProtocols: ['http', 'https', 'mailto']
}
```

**Example 3: All defaults (web, email, and phone)**
```typescript
linkSettings: {
    allowedProtocols: ['http', 'https', 'mailto', 'tel']
}
```

**Example 4: Custom protocols (add FTP for file downloads)**
```typescript
linkSettings: {
    allowedProtocols: ['http', 'https', 'mailto', 'tel', 'ftp']
}
```

#### For End Users

The allowed protocols are configured by your application administrator. You can only use the protocols that are enabled. To create a link:

1. Click the **Link** button
2. Enter a URL with an allowed protocol
3. Allowed protocols: `http`, `https`, `mailto`, `tel` (by default)
4. Click **Insert**

If your URL uses a protocol not in the allowed list, you'll see an error message.

### Why Protocol Configuration Matters

**Security**: Restricting protocols prevents links to potentially unsafe resources

**Compliance**: Some organizations require only HTTPS (secure) links

**User Experience**: Only showing relevant link types reduces confusion

**Content Control**: Allows admins to enforce policies (e.g., "no external file downloads")

### Practical Examples

**Scenario 1: News Blog**
- Allowed: `http`, `https`, `mailto`
- Reason: Users can link to articles and contact authors via email
- Blocked: `tel` (phone numbers aren't relevant)

**Scenario 2: Corporate Communication**
- Allowed: `https` only
- Reason: Security policy requires encrypted links
- Blocked: `http` (unsecure)

**Scenario 3: Healthcare Platform**
- Allowed: `https`, `mailto`, `tel`
- Reason: Need secure links, email, and phone numbers for patient communication
- Blocked: Others

---

## 5. Default Protocol: Automatically Completing Incomplete URLs

Sometimes users type URLs without specifying a protocol (like `https://`). This section explains how RichTextEditor automatically completes these URLs.

### What "Default Protocol" Means

The default protocol is the protocol automatically added to URLs that don't have one specified.

```
User types:        example.com
Editor adds:       https://example.com
                   ^^^^^^
                   Default protocol
```

### Why This Matters

Without a protocol, a URL is ambiguous:

- `example.com` could be anything (website, file path, etc.)
- Browsers don't know how to handle it
- The editor needs to add a protocol to make it valid

### Default Protocol: HTTPS

By default, RichTextEditor uses **HTTPS** as the default protocol because:

- **Secure** — HTTPS encrypts data between your browser and the website
- **Standard** — Most modern websites use HTTPS
- **Recommended** — Security best practices favor HTTPS over HTTP

### How Auto-Prepend Protocol Works: Step-by-Step

#### Step 1: User Types or Pastes a URL

```
User types: "example.com"
```

#### Step 2: Editor Detects Missing Protocol

The editor recognizes that the URL has no protocol at the beginning.

#### Step 3: Editor Adds Default Protocol

```
After prepending default protocol: "https://example.com"
```

#### Step 4: Link is Created

The complete URL is now valid and the link is created.

### Examples of Auto-Prepend in Action

| What You Type | What Gets Created | Why |
|---------------|-------------------|-----|
| `example.com` | `https://example.com` | No protocol, so HTTPS is added |
| `https://example.com` | `https://example.com` | Already has protocol, nothing added |
| `http://example.com` | `http://example.com` | Already has protocol, nothing added |
| `www.example.com` | `https://www.example.com` | No protocol, so HTTPS is added |
| `user@example.com` | Depends on config | Might be treated as email (mailto:) |

### When Auto-Prepend Triggers

Auto-prepend only adds a protocol when:

- ✅ The URL has no protocol
- ✅ The URL is recognized as a web URL (starts with domain-like text)
- ❌ Protocol is not added if URL already has one
- ❌ Protocol is not added to relative URLs (like `/page/`)

### Changing the Default Protocol

#### For Application Developers

If you want to use a different default protocol:

**Example 1: Use HTTP instead of HTTPS (not recommended)**
```typescript
linkSettings: {
    defaultProtocol: 'http'
}
```

**Example 2: Use HTTPS (default, recommended)**
```typescript
linkSettings: {
    defaultProtocol: 'https'
}
```

**Example 3: Disable auto-prepend entirely**
```typescript
linkSettings: {
    autoPrependProtocol: false  // Don't add protocol automatically
}
```

#### For End Users

The default protocol is configured by your application administrator. If you want more control, type the full URL with the protocol yourself:

- To force HTTP: type `http://example.com`
- To force HTTPS: type `https://example.com`
- To use email: type `mailto:user@example.com`

### Best Practices

- **Always use HTTPS** — It's more secure than HTTP
- **Type the full URL** if you're unsure about auto-prepend behavior
- **Test your links** after creation to ensure they work
- **Verify the protocol** when editing links to make sure it's correct

---

## 6. Configure Allowed Protocols: Restricting Link Types for Security and Compliance

This section explains how to restrict which protocols users can use in links—useful for security, compliance, or content control.

### Why Restrict Protocols?

Organizations might restrict protocols for several reasons:

- **Security** — Block potentially dangerous protocols
- **Compliance** — Meet industry regulations (e.g., healthcare, finance)
- **Content Policy** — Enforce organizational standards
- **User Experience** — Only allow relevant link types

### What Happens When a Protocol Is Not Allowed

If a user tries to create a link with a disallowed protocol:

1. The link creation fails
2. An error message appears: "This protocol is not allowed"
3. The user must choose an allowed protocol instead

### Step-by-Step: Restrict Protocols

#### For Application Developers

You control which protocols are allowed through configuration.

**Example 1: Allow HTTPS only (most secure)**
```typescript
linkSettings: {
    allowedProtocols: ['https']
}
```
Users can only create links to secure websites. HTTP, email, and phone links are blocked.

**Example 2: Allow HTTPS and email (but not HTTP or phone)**
```typescript
linkSettings: {
    allowedProtocols: ['https', 'mailto']
}
```
Users can link to secure websites and email addresses, but not to unsecure sites or phone numbers.

**Example 3: Allow everything except FTP**
```typescript
linkSettings: {
    allowedProtocols: ['http', 'https', 'mailto', 'tel']
    // Note: 'ftp' is not included
}
```

**Example 4: Add custom protocols**
```typescript
linkSettings: {
    allowedProtocols: ['https', 'mailto', 'ftp', 'custom-protocol']
}
```

#### For End Users

Try to create a link:

1. Click the **Link** button
2. Type or paste your URL
3. If the protocol is not allowed, you'll see an error
4. Check with your administrator about which protocols are allowed
5. Use an allowed protocol instead

### Practical Configuration Scenarios

#### Scenario 1: Educational Platform

**Requirement**: Teachers should link to educational content, but not external personal websites.

**Configuration**:
```typescript
linkSettings: {
    allowedProtocols: ['https']  // Secure web links only
}
```

**Result**: Only HTTPS links are allowed. HTTP, email, and phone links are blocked.

#### Scenario 2: Corporate Newsletter

**Requirement**: Newsletter should include company links and employee emails, but not phone numbers.

**Configuration**:
```typescript
linkSettings: {
    allowedProtocols: ['https', 'mailto']
}
```

**Result**: Email links and secure website links are allowed. Phone numbers cannot be linked.

#### Scenario 3: Healthcare Application

**Requirement**: Secure communication with patients requires HTTPS, email, AND phone links.

**Configuration**:
```typescript
linkSettings: {
    allowedProtocols: ['https', 'mailto', 'tel']
}
```

**Result**: All three protocol types are allowed for comprehensive patient communication.

#### Scenario 4: Strict Security Policy

**Requirement**: Absolute security—only HTTPS, no external communication links in public content.

**Configuration**:
```typescript
linkSettings: {
    allowedProtocols: ['https'],
    defaultProtocol: 'https'
}
```

**Result**: Only HTTPS is allowed. All URLs are auto-completed with HTTPS.

### Testing Restricted Protocols

After configuring restrictions, test each protocol:

1. **Try HTTPS link** — Should work
   - Type: `https://example.com`
   - Expected: Link created

2. **Try HTTP link** — Check if blocked
   - Type: `http://example.com`
   - Expected: Error if HTTP is not allowed

3. **Try email link** — Check if allowed
   - Type: `mailto:user@example.com`
   - Expected: Works if mailto is allowed

4. **Try phone link** — Check if allowed
   - Type: `tel:+1-555-123-4567`
   - Expected: Works if tel is allowed

---

## 7. Link Quick Toolbar: Editing and Managing Existing Links

The Link Quick Toolbar appears when you click on or select a link in your content. It provides quick access to common link actions without opening dialogs.

### What Is the Link Quick Toolbar?

The Link Quick Toolbar is a floating toolbar that appears near your cursor when you interact with a link. It provides quick actions for managing that link.

```
╔════════════════════════════════════════════════════╗
│ For more information, [visit our website].         │
│                       ^^^^^^^^^^^^^^^^^^^^         │
│ Click on link → Quick Toolbar appears:             │
│                ┌─────────────────────────┐         │
│                │ 🔗 Open | Copy | Edit | ✕ |       │
│                └─────────────────────────┘         │
└════════════════════════════════════════════════════┘
```

### Available Quick Toolbar Actions

The Link Quick Toolbar typically includes these actions:

| Action | Icon | What It Does | Example |
|--------|------|--------------|---------|
| **Open** | 🔗 | Opens the link in a new tab to verify it works | Click to preview the link |
| **Copy** | 📋 | Copies the link URL to your clipboard | Click to copy, then paste elsewhere |
| **Edit** | ✏️ | Opens the link editor to change URL or target | Click to change the link |
| **Remove** | ✕ | Removes the link (text remains) | Click to unlink text |

### How to Use the Link Quick Toolbar: Step-by-Step

#### Step 1: Locate Your Link

Find the link in your content that you want to manage.

```
Example content: "For more information, visit our website."
                                     ^^^^^^^^^^^^^^^^
                                     (This is your link)
```

#### Step 2: Click on the Link

Click directly on the linked text.

```
Your cursor: [click here on the link]
             ^^^^^^^^^^^^^^^^
Result: Quick Toolbar appears
```

#### Step 3: Choose Your Action

Look for the quick toolbar that appears near your cursor and click the action you want:

**Option A: Open the link to verify it works**
```
┌──────────────────────┐
│ 🔗 Open | Copy | ... │
│    ↑                 │
│ Click here           │
└──────────────────────┘
Result: Link opens in new tab
```

**Option B: Copy the link URL**
```
┌──────────────────────┐
│ 🔗 Open | 📋 Copy ... │
│          ↑           │
│ Click here           │
└──────────────────────┘
Result: URL copied to clipboard
```

**Option C: Edit the link**
```
┌──────────────────────┐
│ 🔗 Open | 📋 Copy | ✏️ Edit │
│                  ↑   │
│            Click here │
└──────────────────────┘
Result: Link editor opens
```

**Option D: Remove the link**
```
┌──────────────────────┐
│ 🔗 Open | 📋 Copy | ✏️ Edit | ✕ │
│                            ↑  │
│                      Click here │
└──────────────────────┘
Result: Link removed, text remains
```

### Detailed Walkthrough: Each Quick Toolbar Action

#### Action 1: Open

**What it does**: Opens the link in a new browser tab

**When to use**: 
- Verify that your link works
- Preview where the link goes
- Test link functionality

**Steps**:
1. Click on the link text
2. Quick toolbar appears
3. Click the **Open** button (🔗 icon)
4. Link opens in a new tab
5. You can verify it's correct, then return to editing

#### Action 2: Copy

**What it does**: Copies the link URL to your clipboard

**When to use**:
- Reuse the same URL elsewhere
- Share the URL with someone
- Backup a URL before editing

**Steps**:
1. Click on the link text
2. Quick toolbar appears
3. Click the **Copy** button (📋 icon)
4. URL is copied to clipboard
5. Paste it elsewhere with `Ctrl+V` (or `Cmd+V`)

#### Action 3: Edit

**What it does**: Opens the link editor dialog to change the URL or target

**When to use**:
- Change where the link points to
- Change how the link opens (new tab vs. same tab)
- Update link text

**Steps**:
1. Click on the link text
2. Quick toolbar appears
3. Click the **Edit** button (✏️ icon)
4. Link editor dialog opens
5. Make your changes:
   - Change the URL
   - Change the link text
   - Change the target (new tab / same tab)
6. Click **Save** or **Update**
7. Changes are applied

#### Action 4: Remove

**What it does**: Removes the link (the text remains, but it's no longer clickable)

**When to use**:
- Remove incorrect links
- Convert a link back to plain text
- Clean up content

**Steps**:
1. Click on the link text
2. Quick toolbar appears
3. Click the **Remove** button (✕ icon)
4. Link is removed
5. Text remains in your content but is no longer clickable
