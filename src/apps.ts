import { List } from "@oxi/list";

type App = {
	id: string;
	name: string;
	desc: string;
	lang: Lang;
};

export enum Lang {
	C = "C",
	CPlusPlus = "C++",
	Crystal = "Crystal",
	CSharp = "C#",
	Go = "Go",
	JavaScript = "JavaScript",
	Python = "Python",
	Rust = "Rust",
	Swift = "Swift",
	Vala = "Vala",
}

const apps: App[] = [
	{
		id: "io.bassi.Amberol",
		name: "Amberol",
		desc: "Plays music, and nothing else",
		lang: Lang.Rust,
	},
	{
		id: "net.natesales.Aviator",
		name: "Aviator",
		desc: "Your Video Copilot: AV1/OPUS Video Encoder",
		lang: Lang.Python,
	},
	{
		id: "io.github.Bavarder.Bavarder",
		name: "Bavarder",
		desc: "Chit-chat with an AI",
		lang: Lang.Python,
	},
	{
		id: "com.raggesilver.BlackBox",
		name: "Black Box",
		desc: "A beautiful GTK 4 terminal",
		lang: Lang.Vala,
	},
	{
		id: "com.rafaelmardojai.Blanket",
		name: "Blanket",
		desc: "Listen to different sounds",
		lang: Lang.Python,
	},
	{
		id: "com.usebottles.bottles",
		name: "Bottles",
		desc: "Run Windows Software",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.Builder",
		name: "Builder",
		desc: "An IDE for GNOME",
		lang: Lang.C,
	},
	{
		id: "hu.kramo.Cartridges",
		name: "Cartridges",
		desc: "Launch all your games",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.Snapshot",
		name: "Snapshot",
		desc: "Take pictures and videos",
		lang: Lang.Rust,
	},
	{
		id: "org.nickvision.cavalier",
		name: "Cavalier",
		desc: "Visualize audio with CAVA",
		lang: Lang.CSharp,
	},
	{
		id: "com.github.rafostar.Clapper",
		name: "Clapper",
		desc: "Simple and modern GNOME media player",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.design.Contrast",
		name: "Contrast",
		desc: "Check contrast between two colors",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.adhami3310.Converter",
		name: "Switcheroo",
		desc: "Convert and manipulate images",
		lang: Lang.Rust,
	},
	{
		id: "com.github.huluti.Curtail",
		name: "Curtail",
		desc: "Compress your images",
		lang: Lang.Python,
	},
	{
		id: "com.belmoussaoui.Decoder",
		name: "Decoder",
		desc: "Scan and Generate QR Codes",
		lang: Lang.Rust,
	},
	{
		id: "org.nickvision.money",
		name: "Denaro",
		desc: "Manage your personal finances",
		lang: Lang.CSharp,
	},
	{
		id: "app.drey.Dialect",
		name: "Dialect",
		desc: "Translate between languages",
		lang: Lang.Python,
	},
	{
		id: "me.dusansimic.DynamicWallpaper",
		name: "Dynamic Wallpaper",
		desc: "Dynamic wallpaper creator for Gnome 42",
		lang: Lang.Python,
	},
	{
		id: "com.github.wwmm.easyeffects",
		name: "Easy Effects",
		desc: "Audio Effects for PipeWire Applications",
		lang: Lang.CPlusPlus,
	},
	{
		id: "io.github.mrvladus.List",
		name: "Errands",
		desc: "Manage your tasks",
		lang: Lang.Python,
	},
	{
		id: "io.github.cleomenezesjr.Escambo",
		name: "Escambo",
		desc: "Test and develop APIs",
		lang: Lang.Python,
	},
	{
		id: "com.mattjakeman.ExtensionManager",
		name: "Extension Manager",
		desc: "Browse, install, and manage GNOME Shell Extensions",
		lang: Lang.C,
	},
	{
		id: "com.github.finefindus.eyedropper",
		name: "Eyedropper",
		desc: "Pick and format colors",
		lang: Lang.Rust,
	},
	{
		id: "com.github.ADBeveridge.Raider",
		name: "File Shredder",
		desc: "Securely delete your files",
		lang: Lang.C,
	},
	{
		id: "de.schmidhuberj.Flare",
		name: "Flare",
		desc: "Chat with your friends on Signal",
		lang: Lang.Rust,
	},
	{
		id: "com.github.tchx84.Flatseal",
		name: "Flatseal",
		desc: "Manage Flatpak permissions",
		lang: Lang.JavaScript,
	},
	{
		id: "io.github.giantpinkrobots.flatsweep",
		name: "Flatsweep",
		desc: "Flatpak leftover cleaner",
		lang: Lang.Python,
	},
	{
		id: "io.github.diegoivanme.flowtime",
		name: "Flowtime",
		desc: "Spend your time wisely",
		lang: Lang.Vala,
	},
	{
		id: "com.mardojai.ForgeSparks",
		name: "Forge Sparks",
		desc: "Get Git forges notifications",
		lang: Lang.JavaScript,
	},
	{
		id: "de.haeckerfelix.Fragments",
		name: "Fragments",
		desc: "A BitTorrent Client",
		lang: Lang.Rust,
	},
	{
		id: "io.github.realmazharhussain.GdmSettings",
		name: "GDM Settings",
		desc: "Customize your login screen",
		lang: Lang.Python,
	},
	{
		id: "dev.Cogitri.Health",
		name: "Health",
		desc: "Track your fitness goals",
		lang: Lang.Rust,
	},
	{
		id: "org.gnome.Loupe",
		name: "Loupe",
		desc: "View images",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.adhami3310.Impression",
		name: "Impression",
		desc: "Create bootable drives",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.gregorni.Letterpress",
		name: "Letterpress",
		desc: "Create beautiful ASCII art",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.design.Lorem",
		name: "Lorem",
		desc: "Generate placeholder text",
		lang: Lang.Rust,
	},
	{
		id: "fr.romainvigier.MetadataCleaner",
		name: "Metadata Cleaner",
		desc: "View and clean metadata in files",
		lang: Lang.Python,
	},
	{
		id: "io.missioncenter.MissionCenter",
		name: "Mission Center",
		desc: "Monitor system resource usage",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.zehkira.Monophony",
		name: "Monophony",
		desc: "Stream music from YouTube",
		lang: Lang.Python,
	},
	{
		id: "io.github.seadve.Mousai",
		name: "Mousai",
		desc: "Identify songs in seconds",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.news_flash.NewsFlash",
		name: "NewsFlash",
		desc: "Keep up with your feeds",
		lang: Lang.Rust,
	},
	{
		id: "com.belmoussaoui.Obfuscate",
		name: "Obfuscate",
		desc: "Censor private information",
		lang: Lang.Rust,
	},
	// {
	//   id: "app.drey.PaperPlane",
	//   name: "Paper Plane",
	//   desc: "Chat over Telegram on a modern and elegant client",
	//   lang: Lang.Rust,
	// },
	{
		id: "org.nickvision.tubeconverter",
		name: "Parabolic",
		desc: "Download web video and audio",
		lang: Lang.CSharp,
	},
	{
		id: "org.gnome.World.PikaBackup",
		name: "Pika Backup",
		desc: "Keep your data safe",
		lang: Lang.Rust,
	},
	{
		id: "org.gnome.Podcasts",
		name: "Podcasts",
		desc: "Listen to your favorite shows",
		lang: Lang.Rust,
	},
	{
		id: "com.github.marhkb.Pods",
		name: "Pods",
		desc: "Keep track of your podman containers",
		lang: Lang.Rust,
	},
	{
		id: "net.nokyan.Resources",
		name: "Resources",
		desc: "Monitor your system resources and processes",
		lang: Lang.Rust,
	},
	{
		id: "com.rafaelmardojai.SharePreview",
		name: "Share Preview",
		desc: "Test social media cards locally",
		lang: Lang.Rust,
	},
	{
		id: "de.haeckerfelix.Shortwave",
		name: "Shortwave",
		desc: "Listen to internet radio",
		lang: Lang.Rust,
	},
	{
		id: "it.mijorus.smile",
		name: "Smile",
		desc: "An emoji picker",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.Solanum",
		name: "Solanum",
		desc: "Balance working time and break time",
		lang: Lang.Rust,
	},
	{
		id: "xyz.ketok.Speedtest",
		name: "Speedtest",
		desc: "Measure your internet connection speed",
		lang: Lang.Python,
	},
	{
		id: "dev.alextren.Spot",
		name: "Spot",
		desc: "Listen to music on Spotify",
		lang: Lang.Rust,
	},
	{
		id: "com.github.liferooter.textpieces",
		name: "Text Pieces",
		desc: "Transform text without using random websites",
		lang: Lang.Vala,
	},
	{
		id: "me.iepure.Ticketbooth",
		name: "Ticket Booth",
		desc: "Keep track of your favorite shows",
		lang: Lang.Python,
	},
	{
		id: "de.philippun1.turtle",
		name: "Turtle",
		desc: "Manage your git repositories",
		lang: Lang.Python,
	},
	{
		id: "io.gitlab.theevilskeleton.Upscaler",
		name: "Upscaler",
		desc: "Upscale and enhance images",
		lang: Lang.Python,
	},
	{
		id: "com.github.unrud.VideoDownloader",
		name: "Video Downloader",
		desc: "Download videos from websites like YouTube and many others",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.gitlab.YaLTeR.VideoTrimmer",
		name: "Video Trimmer",
		desc: "Trim videos quickly",
		lang: Lang.Rust,
	},
	{
		id: "io.github.flattool.Warehouse",
		name: "Warehouse",
		desc: "Manage all things Flatpak",
		lang: Lang.Python,
	},
	{
		id: "app.drey.Warp",
		name: "Warp",
		desc: "Fast and secure file transfer",
		lang: Lang.Rust,
	},
	{
		id: "com.github.hugolabe.Wike",
		name: "Wike",
		desc: "Search and read Wikipedia articles",
		lang: Lang.Python,
	},
	{
		id: "re.sonny.Workbench",
		name: "Workbench",
		desc: "Learn and prototype with GNOME technologies",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.Music",
		name: "Music",
		desc: "Play and organize your music collection",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.Calendar",
		name: "Calendar",
		desc: "Calendar for GNOME",
		lang: Lang.C,
	},
	{
		id: "org.gnome.Weather",
		name: "Weather",
		desc: "Show weather conditions and forecast",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.Maps",
		name: "Maps",
		desc: "Find places around the world",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.clocks",
		name: "Clocks",
		desc: "Keep track of time",
		lang: Lang.Vala,
	},
	{
		id: "org.gnome.Epiphany",
		name: "Web",
		desc: "Browse the web",
		lang: Lang.C,
	},
	{
		id: "io.github.nate_xyz.Resonance",
		name: "Resonance",
		desc: "Harmonize your listening experience",
		lang: Lang.Rust,
	},
	{
		id: "com.vixalien.decibels",
		name: "Decibels",
		desc: "Play audio files",
		lang: Lang.JavaScript,
	},
	{
		id: "com.belmoussaoui.Authenticator",
		name: "Authenticator",
		desc: "Generate Two-Factor Codes",
		lang: Lang.Rust,
	},
	{
		id: "org.gnome.World.Secrets",
		name: "Secrets",
		desc: "Manage your passwords",
		lang: Lang.Python,
	},
	{
		id: "com.github.neithern.g4music",
		name: "G4Music",
		desc: "Play your music elegantly",
		lang: Lang.Vala,
	},
	{
		id: "io.github.diegopvlk.Dosage",
		name: "Dosage",
		desc: "Keep track of your treatments",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.Todo",
		name: "Endeavour",
		desc: "Manage your tasks",
		lang: Lang.C,
	},
	{
		id: "org.gnome.DejaDup",
		name: "Déjà Dup Backups",
		desc: "Protect yourself from data loss",
		lang: Lang.Vala,
	},
	{
		id: "de.haeckerfelix.AudioSharing",
		name: "Audio Sharing",
		desc: "Share your computer audio",
		lang: Lang.Rust,
	},
	{
		id: "org.zrythm.Zrythm",
		name: "Zrythm",
		desc: "Digital audio workstation",
		lang: Lang.CPlusPlus,
	},
	{
		id: "io.github.nate_xyz.Chromatic",
		name: "Chromatic",
		desc: "Fine-tune your instruments",
		lang: Lang.Rust,
	},
	{
		id: "org.nickvision.tagger",
		name: "Tagger",
		desc: "Tag your music",
		lang: Lang.CSharp,
	},
	{
		id: "app.drey.EarTag",
		name: "Ear Tag",
		desc: "Edit audio file tags",
		lang: Lang.Python,
	},
	{
		id: "io.github.celluloid_player.Celluloid",
		name: "Celluloid",
		desc: "GTK+ frontend for mpv",
		lang: Lang.C,
	},
	{
		id: "com.pojtinger.felicitas.Multiplex",
		name: "Multiplex",
		desc: "Watch torrents with your friends",
		lang: Lang.Go,
	},
	{
		id: "io.gitlab.adhami3310.Footage",
		name: "Footage",
		desc: "Polish your videos",
		lang: Lang.Rust,
	},
	{
		id: "io.github.seadve.Kooha",
		name: "Kooha",
		desc: "Elegantly record your screen",
		lang: Lang.Rust,
	},
	{
		id: "org.gnome.gitlab.YaLTeR.Identity",
		name: "Identity",
		desc: "Compare images and videos",
		lang: Lang.Rust,
	},
	{
		id: "io.github.nokse22.asciidraw",
		name: "ASCII Draw",
		desc: "Draw using ASCII characters",
		lang: Lang.Python,
	},
	{
		id: "io.gitlab.gregorni.Calligraphy",
		name: "Calligraphy",
		desc: "Turn your text into ASCII banners",
		lang: Lang.Python,
	},
	{
		id: "io.github.tfuxu.Halftone",
		name: "Halftone",
		desc: "Give your images that pixel art-like style",
		lang: Lang.Python,
	},
	{
		id: "io.github.dubstar_04.design",
		name: "Design",
		desc: "2D CAD for GNOME",
		lang: Lang.JavaScript,
	},
	{
		id: "io.github.dlippok.photometric-viewer",
		name: "Photometry",
		desc: "View photometric files",
		lang: Lang.Python,
	},
	{
		id: "com.rafaelmardojai.WebfontKitGenerator",
		name: "Webfont Kit Generator",
		desc: "Create @font-face kits easily",
		lang: Lang.Python,
	},
	{
		id: "nl.g4d.Girens",
		name: "Girens for Plex",
		desc: "Watch your Plex content",
		lang: Lang.Python,
	},
	{
		id: "io.github.bytezz.IPLookup",
		name: "IP Lookup",
		desc: "Find info about an IP address",
		lang: Lang.Python,
	},
	{
		id: "im.dino.Dino",
		name: "Dino",
		desc: "Modern XMPP Chat Client",
		lang: Lang.Vala,
	},
	{
		id: "org.gabmus.gfeeds",
		name: "Feeds",
		desc: "News reader for GNOME",
		lang: Lang.Python,
	},
	{
		id: "dev.geopjr.Tuba",
		name: "Tuba",
		desc: "Browse the Fediverse",
		lang: Lang.Vala,
	},
	{
		id: "re.sonny.Tangram",
		name: "Tangram",
		desc: "Browser for your pinned tabs",
		lang: Lang.JavaScript,
	},
	{
		id: "info.febvre.Komikku",
		name: "Komikku",
		desc: "Read your favorite manga",
		lang: Lang.Python,
	},
	{
		id: "se.sjoerd.Graphs",
		name: "Graphs",
		desc: "Plot and manipulate data",
		lang: Lang.Python,
	},
	{
		id: "com.github.cassidyjames.dippi",
		name: "Dippi",
		desc: "Calculate display info like DPI and aspect ratio",
		lang: Lang.Vala,
	},
	{
		id: "org.gabmus.whatip",
		name: "What IP",
		desc: "Info on your IP",
		lang: Lang.Python,
	},
	{
		id: "ir.imansalmani.IPlan",
		name: "IPlan",
		desc: "Your plan for improving personal life and workflow",
		lang: Lang.Rust,
	},
	{
		id: "com.feaneron.Boatswain",
		name: "Boatswain",
		desc: "Control your Elgato Stream Decks",
		lang: Lang.C,
	},
	{
		id: "garden.turtle.Jellybean",
		name: "Stockpile",
		desc: "Manage inventories of various things",
		lang: Lang.Vala,
	},
	{
		id: "org.gnome.Characters",
		name: "Characters",
		desc: "Character map application",
		lang: Lang.C,
	},
	{
		id: "com.clarahobbs.chessclock",
		name: "Chess Clock",
		desc: "Time games of over-the-board chess",
		lang: Lang.Python,
	},
	{
		id: "com.lakoliu.Furtherance",
		name: "Furtherance",
		desc: "Track your time without being tracked",
		lang: Lang.Rust,
	},
	{
		id: "io.github.lainsce.Khronos",
		name: "Khronos",
		desc: "Log the time it took to do tasks",
		lang: Lang.Vala,
	},
	{
		id: "re.sonny.Retro",
		name: "Retro",
		desc: "A customizable retro digital segment clock",
		lang: Lang.JavaScript,
	},
	{
		id: "com.github.vikdevelop.timer",
		name: "Timer",
		desc: "Simple Countdown Timer",
		lang: Lang.Python,
	},
	{
		id: "dev.edfloreshz.Done",
		name: "Done",
		desc: "To-do lists reimagined",
		lang: Lang.Rust,
	},
	{
		id: "io.github.dgsasha.Remembrance",
		name: "Reminders",
		desc: "Set reminders for yourself",
		lang: Lang.Python,
	},
	{
		id: "dev.geopjr.Collision",
		name: "Collision",
		desc: "Check hashes for your files",
		lang: Lang.Crystal,
	},
	{
		id: "pm.mirko.Atoms",
		name: "Atoms",
		desc: "Manage Chroot and Containers",
		lang: Lang.Python,
	},
	{
		id: "re.sonny.Playhouse",
		name: "Playhouse",
		desc: "Playground for HTML/CSS/JavaScript",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.World.Citations",
		name: "Citations",
		desc: "Manage your bibliography",
		lang: Lang.Rust,
	},
	{
		id: "com.felipekinoshita.Wildcard",
		name: "Wildcard",
		desc: "Test your regular expressions",
		lang: Lang.Rust,
	},
	{
		id: "de.philippun1.Snoop",
		name: "Snoop",
		desc: "Snoop through your files",
		lang: Lang.Vala,
	},
	{
		id: "me.iepure.devtoolbox",
		name: "Dev Toolbox",
		desc: "Development tools at your fingertips",
		lang: Lang.Python,
	},
	{
		id: "com.github.GradienceTeam.Gradience",
		name: "Gradience",
		desc: "Change the look of Adwaita, with ease",
		lang: Lang.Python,
	},
	{
		id: "re.sonny.Commit",
		name: "Commit",
		desc: "Commit message editor",
		lang: Lang.JavaScript,
	},
	{
		id: "io.github.lainsce.Emulsion",
		name: "Emulsion",
		desc: "Stock up on colors",
		lang: Lang.Vala,
	},
	{
		id: "org.gnome.design.IconLibrary",
		name: "Icon Library",
		desc: "Symbolic icons for your apps",
		lang: Lang.Rust,
	},
	{
		id: "io.github.nate_xyz.Paleta",
		name: "Paleta",
		desc: "Generate color palettes with ease",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.design.SymbolicPreview",
		name: "Symbolic Preview",
		desc: "Symbolics Made Easy",
		lang: Lang.Rust,
	},
	{
		id: "com.hunterwittenborn.Celeste",
		name: "Celeste",
		desc: "Sync your cloud files",
		lang: Lang.Rust,
	},
	{
		id: "com.felipekinoshita.Kana",
		name: "Kana",
		desc: "Learn Japanese characters",
		lang: Lang.Rust,
	},
	{
		id: "com.ranfdev.Notify",
		name: "Notify",
		desc: "Receive notifications from ntfy.sh.",
		lang: Lang.Rust,
	},
	{
		id: "fr.sgued.ten_forward",
		name: "Ten Forward",
		desc: "Configure port forwarding on your gateway through the NAT-PMP protocol.",
		lang: Lang.Rust,
	},
	{
		id: "dev.zelikos.rollit",
		name: "Roll-It",
		desc: "Roll the dice",
		lang: Lang.Rust,
	},
	{
		id: "io.github.fkinoshita.Telegraph",
		name: "Telegraph",
		desc: "Write and decode morse",
		lang: Lang.Python,
	},
	{
		id: "com.gitlab.guillermop.MasterKey",
		name: "Master Key",
		desc: "A password manager application",
		lang: Lang.Python,
	},
	{
		id: "io.github.eminfedar.vaktisalah-gtk-rs",
		name: "Vakt-i Salah",
		desc: "GTK4 version of Vakt-i Salah (Prayer Times)",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.azymohliad.WatchMate",
		name: "Watchmate",
		desc: "Manage your PineTime",
		lang: Lang.Rust,
	},
	{
		id: "io.github.diegoivan.pdf_metadata_editor",
		name: "Paper Clip",
		desc: "Edit PDF document metadata",
		lang: Lang.Vala,
	},
	{
		id: "org.gnome.Chess",
		name: "Chess",
		desc: "Play the classic two-player board game of chess",
		lang: Lang.Vala,
	},
	{
		id: "org.gnome.gitlab.cheywood.Iotas",
		name: "Iotas",
		desc: "Simple note taking",
		lang: Lang.Python,
	},
	{
		id: "de.k_bo.Televido",
		name: "Televido",
		desc: "Access German-language public TV",
		lang: Lang.Rust,
	},
	{
		id: "de.schmidhuberj.DieBahn",
		name: "Railway",
		desc: "Travel with all your train information in one place",
		lang: Lang.Rust,
	},
	{
		id: "com.belmoussaoui.ReadItLater",
		name: "Read It Later",
		desc: "Save and read web articles",
		lang: Lang.Rust,
	},
	{
		id: "so.libdb.dissent",
		name: "Dissent",
		desc: "GTK4 Discord client in Go (formerly gtkcord4)",
		lang: Lang.Go,
	},
	{
		id: "com.github.joseexposito.touche",
		name: "Touché",
		desc: "Multi-touch Gestures",
		lang: Lang.JavaScript,
	},
	{
		id: "it.mijorus.gearlever",
		name: "Gear Level",
		desc: "Manage AppImages",
		lang: Lang.Python,
	},
	{
		id: "im.bernard.Nostalgia",
		name: "Nostalgia",
		desc: "Set historic GNOME Wallpapers",
		lang: Lang.Vala,
	},
	{
		id: "io.github.vikdevelop.SaveDesktop",
		name: "SaveDesktop",
		desc: "Save the current configuration of your desktop environment",
		lang: Lang.Python,
	},
	{
		id: "io.frama.tractor.carburetor",
		name: "Carburetor",
		desc: "The Onion Routing app",
		lang: Lang.Python,
	},
	{
		id: "cool.ldr.lfy",
		name: "lfy",
		desc: "Translation software for gnome",
		lang: Lang.Python,
	},
	{
		id: "art.taunoerik.tauno-monitor",
		name: "Tauno Monitor",
		desc: "Simple stand-alone serial port monitor",
		lang: Lang.Python,
	},
	{
		id: "io.github.giantpinkrobots.varia",
		name: "Varia",
		desc: "Download manager based on aria2",
		lang: Lang.Python,
	},
	{
		id: "app.drey.Biblioteca",
		name: "Biblioteca",
		desc: "Documentation viewer for GNOME",
		lang: Lang.JavaScript,
	},
	{
		id: "org.gnome.Fractal",
		name: "Fractal",
		desc: "Matrix group messaging app",
		lang: Lang.Rust,
	},
	{
		id: "io.github.leolost2605.gradebook",
		name: "Gradebook",
		desc: "Keep track of your grades",
		lang: Lang.Vala,
	},
	{
		id: "io.github.alainm23.planify",
		name: "Planify",
		desc: "Forget about forgetting things",
		lang: Lang.Vala,
	},
	{
		id: "net.krafting.Playlifin",
		name: "Playlifin",
		desc: "Convert Youtube Music playlists to Jellyfin playlists",
		lang: Lang.Python,
	},
	{
		id: "dev.bragefuglseth.Fretboard",
		name: "Fretboard",
		desc: "Look up guitar chords",
		lang: Lang.Rust,
	},
	{
		id: "cafe.avery.Delfin",
		name: "Delfin",
		desc: "Stream movies and TV shows from Jellyfin",
		lang: Lang.Rust,
	},
	{
		id: "io.gitlab.daikhan.stable",
		name: "Daikhan",
		desc: "Play Videos/Music with style",
		lang: Lang.Vala,
	},
	{
		id: "io.github.FailurePoint.RandomNumberFive",
		name: "Random Number Five",
		desc: "Random number generator for For the Linux desktop!",
		lang: Lang.Python,
	},
	{
		id: "org.freedesktop.Bustle",
		name: "Bustle",
		desc: "Draw sequence diagrams of D-Bus activity",
		lang: Lang.Rust,
	},
	{
		id: "com.quexten.Goldwarden",
		name: "Goldwarden",
		desc: "A Bitwarden compatible desktop client",
		lang: Lang.Go,
	},
	{
		id: "com.github.johnfactotum.Foliate",
		name: "Foliate",
		desc: "Read e-books in style",
		lang: Lang.JavaScript,
	},
	{
		id: "app.drey.KeyRack",
		name: "Key Rack",
		desc: "View and edit app secrets",
		lang: Lang.Rust,
	},
	{
		id: "io.github.fizzyizzy05.binary",
		name: "Binary",
		desc: "Number base converter, written in Python with GTK/Libadwaita",
		lang: Lang.Python,
	},
	{
		id: "org.gaphor.Gaphor",
		name: "Gaphor",
		desc: "Simple UML and SysML modeling tool",
		lang: Lang.Python,
	},
	{
		id: "page.codeberg.libre_menu_editor.LibreMenuEditor",
		name: "Main Menu",
		desc: "Customize the menu",
		lang: Lang.Python,
	},
	{
		id: "io.github.fabrialberio.pinapp",
		name: "PinApp",
		desc: "Create and edit application shortcuts",
		lang: Lang.Python,
	},
	{
		id: "it.mijorus.whisper",
		name: "Whisper",
		desc: "Listen to your mic",
		lang: Lang.Python,
	},
	{
		id: "com.github.alexkdeveloper.forgetpass",
		name: "Forgetpass",
		desc: "Simple password generator for websites",
		lang: Lang.Vala,
	},
	{
		id: "de.schmidhuberj.tubefeeder",
		name: "Pipeline",
		desc: "Follow video creators",
		lang: Lang.Rust,
	},
	{
		id: "xyz.tytanium.DoorKnocker",
		name: "Door Knocker",
		desc: "Check the availability of portals",
		lang: Lang.C,
	},
	{
		id: "io.github.sigmasd.nosleep",
		name: "Stimulator",
		desc: "Stop the desktop environment from sleeping",
		lang: Lang.JavaScript,
	},
	{
		id: "io.github.idevecore.CurrencyConverter",
		name: "Currency Converter",
		desc: "A simple currency converter using Google-based data",
		lang: Lang.Python,
	},
	{
		id: "io.gitlab.idevecore.Pomodoro",
		name: "Pomodoro",
		desc: "Pomodoro is a productivity-focused timer",
		lang: Lang.JavaScript,
	},
	{
		id: "io.github.amit9838.weather",
		name: "Weather",
		desc: "Beautiful and lightweight weather app",
		lang: Lang.Python,
	},
	{
		id: "it.mijorus.collector",
		name: "Collector",
		desc: "Drag and Drop to the next level",
		lang: Lang.Python,
	},
	{
		id: "org.sigxcpu.Livi",
		name: "Light Video",
		desc: "A simple GTK4 based video player for mobile phones",
		lang: Lang.C,
	},
	{
		id: "net.krafting.PleasureDVR",
		name: "Pleasure DVR",
		desc: "DVR for the Chaturbate website",
		lang: Lang.Python,
	},
	{
		id: "io.github.unrud.RecentFilter",
		name: "Recent Filter",
		desc: "Exclude files and folders from recently used files",
		lang: Lang.Python,
	},
	{
		id: "io.github.davidoc26.wallpaper_selector",
		name: "Wallpaper Selector",
		desc: "Downloads and applies wallpapers",
		lang: Lang.Rust,
	},
	{
		id: "page.codeberg.SOrg.DogGTK",
		name: "Doggo",
		desc: "Clicker & Chance Game",
		lang: Lang.C,
	},
	{
		id: "com.github.tenderowl.frog",
		name: "Frog",
		desc: "Extract text from images",
		lang: Lang.Python,
	},
	{
		id: "xyz.slothlife.Jogger",
		name: "Jogger",
		desc: "Fitness tracker",
		lang: Lang.Rust,
	},
	{
		id: "com.github.rogercrocker.badabib",
		name: "Bada Bib!",
		desc: "View and edit BibTeX entries",
		lang: Lang.Python,
	},
	{
		id: "com.github.cassidyjames.clairvoyant",
		name: "Clairvoyant",
		desc: "Ask questions, get psychic answers",
		lang: Lang.Vala,
	},
	{
		id: "io.github.xverizex.RetroSpriteEditor",
		name: "Retro Sprite",
		desc: "Pixel Editor for Retro Consoles",
		lang: Lang.C,
	},
	{
		id: "io.github.phastmike.tags",
		name: "Tags",
		desc: "Color logs based on tags",
		lang: Lang.Vala,
	},
	{
		id: "io.github.santiagocezar.maniatic-launcher",
		name: "Maniatic Launcher",
		desc: "A launcher for the decompilation of Retro Engine (v5)",
		lang: Lang.Python,
	},
	{
		id: "io.github.Rirusha.Cassette",
		name: "Cassette",
		desc: "Unofficial Yandex.Music client",
		lang: Lang.Vala,
	},
	{
		id: "io.github.nokse22.minitext",
		name: "Mini Text",
		desc: "Ephemeral scratch pad",
		lang: Lang.Python,
	},
	{
		id: "io.github.nokse22.ultimate-tic-tac-toe",
		name: "Ultimate Tic Tac Toe",
		desc: "(Tic Tac Toe)²",
		lang: Lang.Python,
	},
	{
		id: "io.github.nokse22.inspector",
		name: "Inspector",
		desc: "View information about your system",
		lang: Lang.Python,
	},
	{
		id: "io.github.nokse22.trivia-quiz",
		name: "Trivia Quiz",
		desc: "Respond to endless questions",
		lang: Lang.Python,
	},
	{
		id: "io.github.nokse22.teleprompter",
		name: "Teleprompter",
		desc: "Stay on track during speeches",
		lang: Lang.Python,
	},
	{
		id: "me.ppvan.psequel",
		name: "psequel",
		desc: "A simple SQL client",
		lang: Lang.Vala,
	},
	{
		id: "dev.tchx84.Portfolio",
		name: "Portfolio",
		desc: "Manage files on the go",
		lang: Lang.Python,
	},
	{
		id: "io.github.dvlv.boxbuddyrs",
		name: "BoxBuddy",
		desc: "A Graphical Distrobox Manager",
		lang: Lang.Rust,
	},
	{
		id: "io.github.weclaw1.ScoreTracker",
		name: "Score Tracker",
		desc: "Application for tracking player scores in card and board games",
		lang: Lang.Rust,
	},
	{
		id: "dev.mufeed.Wordbook",
		name: "Wordbook",
		desc: "Lookup definitions for any English term",
		lang: Lang.Python,
	},
	{
		id: "com.vysp3r.RetroPlus",
		name: "RetroPlus",
		desc: "A simple ROM downloader",
		lang: Lang.Vala,
	},
	{
		id: "com.github.huluti.Coulr",
		name: "Coulr",
		desc: "Enjoy colors and feel happy",
		lang: Lang.Python,
	},
	{
		id: "org.nicotine_plus.Nicotine",
		name: "Nicotine+",
		desc: "Graphical client for the Soulseek network",
		lang: Lang.Python,
	},
	{
		id: "dev.skynomads.Seabird",
		name: "Seabird",
		desc: "Kubernetes desktop client",
		lang: Lang.Go,
	},
	{
		id: "io.github.zefr0x.hashes",
		name: "Hashes",
		desc: "Identify hashing algorithms",
		lang: Lang.Python,
	},
	{
		id: "com.toolstack.Folio",
		name: "Folio",
		desc: "Take notes in Markdown",
		lang: Lang.Vala,
	},
	{
		id: "org.cvfosammmm.Lemma",
		name: "Lemma",
		desc: "Note-Taking App",
		lang: Lang.Python,
	},
	{
		id: "io.github.david_swift.Flashcards",
		name: "Memorize",
		desc: "Study flashcards",
		lang: Lang.Swift,
	},
	{
		id: "app.drey.Elastic",
		name: "Elastic",
		desc: "Design spring animations",
		lang: Lang.Vala,
	},
	{
		id: "com.github.geigi.cozy",
		name: "Cozy",
		desc: "Listen to audio books",
		lang: Lang.Python,
	},
	{
		id: "com.github.Darazaki.Spedread",
		name: "Spedread",
		desc: "GTK speed reading software: Read like a speedrunner!",
		lang: Lang.Vala,
	},
	{
		id: "im.bernard.Memorado",
		name: "Memorado",
		desc: "Memorize anything",
		lang: Lang.Python,
	},
	{
		id: "de.wagnermartin.Plattenalbum",
		name: "Plattenalbum",
		desc: "Browse music with MPD",
		lang: Lang.Python,
	},
	{
		id: "io.github.finefindus.Hieroglyphic",
		name: "Hieroglyphic",
		desc: "Find LaTeX symbols",
		lang: Lang.Rust,
	},
	{
		id: "com.core447.StreamController",
		name: "StreamController",
		desc: "Control your Elgato Stream Decks with plugin support",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.gitlab.cheywood.Buffer",
		name: "Buffer",
		desc: "Embrace ephemeral text",
		lang: Lang.Python,
	},
	{
		id: "io.gitlab.leesonwai.Tactics",
		name: "Tactics",
		desc: "Build your soccer lineup",
		lang: Lang.C,
	},
	{
		id: "io.gitlab.leesonwai.Sums",
		name: "Sums",
		desc: "Calculate with postfix notation",
		lang: Lang.C,
	},
	{
		id: "io.github.halfmexican.Mingle",
		name: "Mingle",
		desc: "Combine emojis with Google's Emoji Kitchen",
		lang: Lang.Vala,
	},
	{
		id: "io.github.cleomenezesjr.aurea",
		name: "Aurea",
		desc: "Flatpak metainfo banner previewer",
		lang: Lang.Python,
	},
	{
		id: "org.gnome.gitlab.somas.Apostrophe",
		name: "Apostrophe",
		desc: "Edit Markdown in style",
		lang: Lang.Python,
	},
	{
		id: "io.github.halfmexican.Mingle",
		name: "Mingle",
		desc: "Combine emojis with Google's Emoji Kitchen",
		lang: Lang.Vala,
	},
];

export default List.from(apps)
	.uniqueBy((item) => item.id)
	.sort((a, b) => a.name.localeCompare(b.name));
