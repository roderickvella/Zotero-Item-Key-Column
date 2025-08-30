/* global Zotero */
const PLUGIN_ID = "item-key-column@rvella";

let registeredDataKey = null;
let infoRowID = null;
let infoRowRegistered = false; 

// ── Items list column ──
async function registerColumn() {
  registeredDataKey = await Zotero.ItemTreeManager.registerColumn({
    dataKey: "itemKeyColumn",
    label: "Item Key",
    pluginID: PLUGIN_ID,
    dataProvider: (item) => item?.key || "",
    sortable: true,
    tooltip: (item) => item?.key || "",
    defaultInColumnsPicker: true
  });
}
async function unregisterColumn() {
  if (registeredDataKey) {
    await Zotero.ItemTreeManager.unregisterColumn(registeredDataKey);
    registeredDataKey = null;
  }
}

// ── Info pane row ──
function registerInfoRow() {
  if (infoRowRegistered || !Zotero?.ItemPaneManager?.registerInfoRow) return;

  infoRowID = Zotero.ItemPaneManager.registerInfoRow({
    rowID: "rvella-item-key-row",
    pluginID: PLUGIN_ID,
    label: { l10nID: "rvella-item-key-label" }, 
    position: "afterCreators",
    multiline: false,
    nowrap: true,
    editable: false,
    onGetData({ item }) {
      return item?.key || "";
    }
  });

  infoRowRegistered = true;
}

function unregisterInfoRow() {
  if (infoRowRegistered && infoRowID && Zotero?.ItemPaneManager?.unregisterInfoRow) {
    Zotero.ItemPaneManager.unregisterInfoRow(infoRowID);
  }
  infoRowID = null;
  infoRowRegistered = false;
}


function onMainWindowLoad({ window }) {
  window.MozXULElement?.insertFTLIfNeeded("item-key-column.ftl");
  registerInfoRow();
  Zotero.ItemPaneManager?.refreshInfoRow?.(infoRowID);
}
function onMainWindowUnload({ window }) {
  window.document.querySelector('link[href="item-key-column.ftl"]')?.remove();
}

// ── Lifecycle ──
async function startup() {
  await registerColumn(); 
}
async function shutdown() {
  await unregisterColumn();
  unregisterInfoRow();
}
function install() {}
function uninstall() {}

this.install = install;
this.uninstall = uninstall;
this.startup = startup;
this.shutdown = shutdown;
this.onMainWindowLoad = onMainWindowLoad;
this.onMainWindowUnload = onMainWindowUnload;
