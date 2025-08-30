# Zotero Item Key Column

This Zotero 7 plugin adds:
- An **“Item Key”** column to the items list and advanced search results  
- An **“Item Key”** row in the **Info panel** (read-only) for quick access

The Item Key is the internal identifier used by Zotero (e.g., `ABCD1234`) and is useful for:
- Linking references between devices
- Scripting or API integrations
- Debugging advanced workflows

![Screenshot showing the Item Key column](https://github.com/roderickvella/Zotero-Item-Key-Column/blob/main/images/screenshot.png?raw=true)

---

## Installation

1. **Download the latest release**  
   Go to the [Releases page](../../releases) and download the latest `.xpi` file  
   (e.g., `item-key-column-1.0.8.xpi`).

2. **Install in Zotero 7**  
   - Open Zotero  
   - Go to **Tools → Plugins**  
   - Drag and drop the downloaded `.xpi` file into the Plugins window  
   - Restart Zotero (very important)

3. **Enable the column**  
   - In the main library view (or Advanced Search results), click the **column picker** (table icon at the top-right of the item list)  
   - Enable **Item Key**

4. **Info pane**  
   - Select an item and open the **Info** tab in the right panel  
   - You will see an **Item Key** row showing the internal key for that item (restart Zotero if the Item Key is not visible)

---

## Development

To build the `.xpi` yourself from source:

```bash
# Zip manifest.json, bootstrap.js, and the locale folder at the root level
zip -r item-key-column.xpi manifest.json bootstrap.js locale
