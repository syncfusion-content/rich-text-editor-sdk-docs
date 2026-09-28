# RichTextEditor UI Events Guide

The RichTextEditor UI component emits various events to notify your application about user interactions, state changes, and content modifications. This guide covers all available events and how to handle them.

---

## change

**When it fires:** After any modification to the document content has been applied and the state is synchronized. This includes user input, paste operations, format changes, and programmatic content updates.

**Typical use cases:**
- Sync editor content with external state or database
- Track content history for analytics
- Update UI to reflect content state
- Implement custom undo/redo logic
- Validate content as user types

**Event Args:**
```typescript
interface ChangeEventArgs {
    readonly name: 'change';
    
    /** The document state after the change. */
    document: EditorDocument;
    
    /** The selection state after the change. */
    selection: Selection;
    
    /**
     * Semantic action describing the nature of the change:
     * - 'Insertion': Content was added (typing, paste, insert command)
     * - 'Deletion': Content was removed (backspace, delete, remove command)
     * - 'Moved': Content was relocated (drag-drop, reorder)
     * - 'Replaced': Content was swapped (find-replace, transform)
     * - 'Update': Attributes or formatting changed (heading level, text color)
     * - 'Unknown': Transaction too complex to categorize
     */
    action: DocumentChangeAction;
    
    /**
     * All Headless Editor nodes touched by this transaction.
     * Provides context about what was changed.
     */
    affectedNodes: EditorNode[];
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    valueFormat: 'json',
    change: (args: ChangeEventArgs) => {
        console.log('Content changed');
        console.log('Action type:', args.action);  // e.g., 'Insertion', 'Deletion'
        
        // Sync with external state
        updateApplicationState(args.document);
        
        // Track what changed
        trackContentModification(args);
        
        // Update character count
        updateCharacterCount(args.document);
        
        // Mark document as modified
        setDocumentDirty(true);
        
        // Example: React to specific action types
        if (args.action === 'Deletion') {
            console.log('User deleted content');
            // Update word count, check for minimum length, etc.
        } else if (args.action === 'Insertion') {
            console.log('User added content');
            // Check for spam, inappropriate content, etc.
        }
        
        // Access affected nodes for advanced use cases
        args.affectedNodes.forEach(node => {
            console.log('Modified node:', node.type);
        });
    }
});

editor.appendTo('#editor');

// The document is an EditorDocument object containing the full content structure
const currentContent = editor.value;  // when valueFormat is 'json'
```

---

## created

**When it fires:** Immediately after the component is fully initialized and the DOM is ready for interaction.

**Typical use cases:**
- Initialize external state or plugins
- Setup event listeners on the editor
- Configure dynamic settings based on the component being ready

**Event Args:**
```typescript
interface CreatedEventArgs {
    readonly name: 'created';
}
```

**Example:**

```typescript
// TypeScript / JavaScript
const editor = new RichTextEditorUI({
    created: () => {
        console.log('Editor is ready!');
        // Initialize external integrations
        initializeSpellChecker();
        loadSavedDraft();
    }
});
editor.appendTo('#editor');
```

```html
<!-- HTML Template -->
<div id="editor"></div>
<script>
    var editor = new RichTextEditorUI({
        created: function() {
            console.log('Editor initialized');
        }
    });
    editor.appendTo('#editor');
</script>
```

---

## destroyed

**When it fires:** After the component is completely removed from the DOM and all resources are cleaned up.

**Typical use cases:**
- Cleanup external integrations or plugins
- Unsubscribe from external event listeners
- Persist final state to storage
- Release allocated resources

**Event Args:**
```typescript
interface DestroyedEventArgs {
    readonly name: 'destroyed';
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    destroyed: () => {
        console.log('Editor has been destroyed');
        // Cleanup
        cleanupSpellChecker();
        persistDraftContent();
    }
});

// Later, when removing the editor
editor.destroy();
```

---

## updatedToolbarStatus

**When it fires:** After the toolbar synchronizes its visual state with the current editor selection and formatting. This occurs after content changes, cursor movements, or selection changes.

**Typical use cases:**
- Update UI to show current formatting state
- Enable/disable format buttons based on context
- Display current font family/size in a custom UI
- Implement custom formatting state indicators

**Event Args:**
```typescript
interface UpdatedToolbarStatusEventArgs {
    readonly name: 'updatedToolbarStatus';
    
    /** Active text marks at current selection */
    activeMarks: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
        superscript: boolean;
        subscript: boolean;
        inlineCode: boolean;
    };
    
    /** Active block-level formats at current selection */
    blockFormats: {
        paragraph: boolean;
        heading: string | null;  // heading level or null
        blockQuote: boolean;
        codeBlock: boolean;
        // ... other block formats
    };
    
    /** Current list type if selection is in a list */
    listType?: string;
    
    /** Current text alignment */
    textAlign?: 'left' | 'center' | 'right' | 'justify';
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    updatedToolbarStatus: (args: UpdatedToolbarStatusEventArgs) => {
        console.log('Toolbar status updated');
        
        // Update custom formatting panel
        document.getElementById('bold-indicator').classList.toggle(
            'active', 
            args.activeMarks.bold
        );
        document.getElementById('italic-indicator').classList.toggle(
            'active', 
            args.activeMarks.italic
        );
        
        // Update font size display
        if (args.currentFontSize) {
            document.getElementById('font-size-display').textContent = 
                args.currentFontSize;
        }
        
        // Update alignment buttons
        if (args.textAlign) {
            document.querySelectorAll('[data-align]').forEach(btn => {
                btn.classList.toggle(
                    'active',
                    btn.dataset.align === args.textAlign
                );
            });
        }
    }
});

editor.appendTo('#editor');
```

---

## focus

**When it fires:** When the editor's editable area receives focus (either through user click/tab or programmatically).

**Typical use cases:**
- Show additional UI elements when editor is active
- Update application state to reflect focus
- Trigger auto-save or backup procedures
- Log user engagement metrics

**Event Args:**
```typescript
interface FocusEventArgs {
    readonly name: 'focus';
    readonly isInteracted: boolean;  // true if user-initiated; false if programmatic
    event: FocusEvent;               // Browser's native FocusEvent
    readonly source: 'Event' | 'Method';  // 'Event' for user action, 'Method' for API
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    focus: (args: FocusEventArgs) => {
        if (args.isInteracted) {
            console.log('User clicked into the editor');
        } else {
            console.log('Focus set programmatically');
        }
        
        // Show helper panel
        showFormattingHelper();
        logAnalyticsEvent('editor_focus');
    }
});
editor.appendTo('#editor');

// Programmatically focus the editor
editor.focus();  // Will trigger focus event with isInteracted = false
```

---

## blur

**When it fires:** When the editor's editable area loses focus (either through user tab/click outside or programmatically).

**Typical use cases:**
- Hide UI elements specific to editing mode
- Trigger content validation
- Save draft content
- Submit form data

**Event Args:**
```typescript
interface BlurEventArgs {
    readonly name: 'blur';
    readonly isInteracted: boolean;  // true if user-initiated
    event: FocusEvent;               // Browser's native FocusEvent
    readonly source: 'Event' | 'Method';  // 'Event' for user action, 'Method' for API
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    blur: (args: BlurEventArgs) => {
        console.log('Editor lost focus');
        
        if (args.isInteracted) {
            console.log('User clicked outside the editor');
        }
        
        // Validate content
        validateEditorContent();
        
        // Auto-save
        saveContentAsDraft();
        
        // Hide helper panel
        hideFormattingHelper();
    }
});
editor.appendTo('#editor');
```

---

## actionBegin

**When it fires:** Synchronously BEFORE an action is executed. This is the point where you can intercept and potentially prevent or modify the action.

**Typical use cases:**
- Validate or filter user actions based on permissions
- Log all user actions for analytics
- Prevent certain operations in specific contexts
- Modify action parameters before execution
- Implement custom authorization logic

**Event Args:**
```typescript
interface ActionBeginEventArgs {
    readonly name: 'actionBegin';
    
    /** The command to be executed (mutable) */
    action: EditorCommandName;
    
    /**
     * Set to true to prevent execution.
     * When set, no actionComplete event is emitted.
     */
    cancel: boolean;
    
    /** Read-only unique identifier for this action invocation */
    actionId: string;
    
    /** Origin of the command (toolbar, keyboard, API, etc.) */
    source: ExecuteOptions;
    
    /** True if triggered by user gesture; false if programmatic */
    isInteracted: boolean;
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    actionBegin: (args: ActionBeginEventArgs) => {
        console.log('Action:', args.action);
        console.log('Source:', args.source);
        
        // Log analytics
        logAction({
            type: args.action,
            source: args.source,
            timestamp: new Date(),
            actionId: args.actionId
        });
        
        // Implement permission checks
        if (args.action === 'imageInsert' && !userCanInsertImages()) {
            args.cancel = true;
            showNotification('Image insertion is not allowed');
            return;
        }
        
        // Prevent paste on readonly fields
        if (args.action === 'paste' && isReadOnlyField()) {
            args.cancel = true;
            return;
        }
        
        // Track user engagement
        if (args.isInteracted) {
            updateUserActivityLog(args.action);
        }
    }
});

editor.appendTo('#editor');
```

---

## actionComplete

**When it fires:** Synchronously AFTER an action has been executed and the component state is fully synchronized. Does NOT fire for cancelled actions.

**Typical use cases:**
- Confirm that an action succeeded
- Update related UI elements after action completion
- Perform follow-up operations
- Log successful action completion
- Update document dirty state

**Event Args:**
```typescript
interface ActionCompleteEventArgs {
    readonly name: 'actionComplete';
    
    /** The action that was executed */
    action: EditorAction;
    
    /** Unique identifier matching the corresponding actionBegin */
    actionId: string;
    
    /** Origin of the command */
    source: ExecuteOptions;
    
    /** True if triggered by user gesture; false if programmatic */
    isInteracted: boolean;
    
    /** True if the action produced observable document changes */
    documentChanged: boolean;
}
```

**Example:**

```typescript
const editor = new RichTextEditorUI({
    actionComplete: (args: ActionCompleteEventArgs) => {
        console.log('Action completed:', args.action);
        
        // Log successful completion
        logActionCompletion({
            actionId: args.actionId,
            action: args.action,
            documentChanged: args.documentChanged
        });
        
        // Reflect changes in UI
        if (args.documentChanged) {
            updateDocumentStatus('modified');
            enableSaveButton();
        }
        
        // Perform follow-up operations
        if (args.action === 'imageInsert' && args.documentChanged) {
            // Validate newly inserted images
            validateImages();
            // Update image count
            updateImageCount();
        }
        
        // Update undo/redo buttons
        updateUndoRedoButtons();
    }
});

editor.appendTo('#editor');
```
