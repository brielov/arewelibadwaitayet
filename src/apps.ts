type App = {
  id: string;
  name: string;
  desc: string;
  lang: Lang;
};

export enum Lang {
  C = "C",
  CPlusPlus = "C++",
  CSharp = "C#",
  Go = "Go",
  JavaScript = "JavaScript",
  Python = "Python",
  Rust = "Rust",
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
    name: "Converter",
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
    lang: Lang.CSharp,
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
    name: "Photometric Viewer",
    desc: "Browse content of IES and LDT photometric files",
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
    desc: "Plot and manipulate data in a breeze",
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
];

export default apps.slice().sort((a, b) => a.name.localeCompare(b.name));
