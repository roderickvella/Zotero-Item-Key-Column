# Zotero Item Key Column

This Zotero 7 plugin adds an **“Item Key”** column to the items list and advanced search results.  
The Item Key is the internal identifier used by Zotero (e.g., `ABCD1234`) and is useful for:
- Linking references between devices
- Scripting or API integrations

---

## Installation

1. **Download the latest release**  
   Go to the [Releases page](../../releases) and download the latest `.xpi` file  
   (e.g., `item-key-column-1.0.0.xpi`).

2. **Install in Zotero**  
   - Open Zotero  
   - Go to **Tools → Plugins**  
   - Drag and drop the downloaded `.xpi` file into the Plugins window  
   - Restart Zotero if prompted

3. **Enable the column**  
   - In the main library view (or Advanced Search results), click the **column picker** (table icon at the top-right of the item list)  
   - Enable **Item Key**


## Development

If you want to build the `.xpi` yourself:

```bash
# Zip manifest.json and bootstrap.js at the root level
zip item-key-column.xpi manifest.json bootstrap.js
```

## Development

MIT License – feel free to fork, modify, and share.