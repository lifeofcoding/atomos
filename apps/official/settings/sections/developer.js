setTitle("Developer options");
const Registry = require(`@api/Registry`);
let main = document.createElement("main");
root.append(main);

let list = document.createElement("section");
list.className = "list-group flex-shrink-0 rounded-0";
list.windowProps = newSmallListItem({
	label: "Show window properties",
	sublabel: "Works only when Live Transformations are turned <b>off</b>",
	type: "checkbox",
	checked: Registry.get("system.showWindowProps"),
	click(checked) {
		Registry.set("system.showWindowProps", checked);
	}
});
list.enableSuperFetch = newSmallListItem({
	label: "Enable SuperFetch <span class='badge badge-warning'>beta</span>",
	sublabel: "Preloads all apps on boot, lowers app startup times, but may increase boot times",
	type: "checkbox",
	checked: Registry.get("system.enableSuperFetch"),
	click(checked) {
		Registry.set("system.enableSuperFetch", checked);
	}
});
list.enableUltraFetch = newSmallListItem({
	label: "Enable UltraFetch <span class='badge badge-warning'>beta</span>",
	sublabel: "Preloads <b>all</b> libraries that could be used in apps. Makes app start-up almost instant, but may create a great hang on boot",
	type: "checkbox",
	checked: Registry.get("system.enableUltraFetch"),
	click(checked) {
		Registry.set("system.enableUltraFetch", checked);
	}
});
list.append(list.windowProps, list.enableSuperFetch, list.enableUltraFetch);
main.append(list);
