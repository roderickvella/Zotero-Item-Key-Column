const PLUGIN_ID = "item-key-column@rvella";
let registeredDataKey = null;

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

async function startup() { await registerColumn(); }
async function shutdown() { await unregisterColumn(); }
function install() {}
function uninstall() {}

this.install = install;
this.uninstall = uninstall;
this.startup = startup;
this.shutdown = shutdown;
