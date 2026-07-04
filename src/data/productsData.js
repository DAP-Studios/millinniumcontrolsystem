export const initialCategories = [
  {
    id: "controllers",
    name: "Controllers (PLCs)",
    description: "Programmable Logic Controllers (PLC) - from simple microcontrollers like the FX series to advanced modular CPUs like the MELSEC Q series, serving Pune and global industrial hubs.",
    image: "/images/cat_controllers.jpg"
  },
  {
    id: "drive-products",
    name: "Drive Products (VFDs)",
    description: "Variable Frequency Drives (VFD) Inverters and high-performance AC Servo Motors & Drives for precision speed and torque control.",
    image: "/images/cat_drives.jpg"
  },
  {
    id: "hmi",
    name: "HMIs & GOCs",
    description: "Human Machine Interfaces (GOT Series) and Graphic Operation Controllers (GOC) combining PLC and display capabilities in a single unit.",
    image: "/images/cat_hmi.jpg"
  },
  {
    id: "robots",
    name: "Industrial Robots",
    description: "MELFA series high-speed, high-precision articulated and SCARA industrial robotic arms for smart factory automated assemblies.",
    image: "/images/cat_robots.jpg"
  },
  {
    id: "circuit-breakers",
    name: "Low-voltage Switchgears & Breakers",
    description: "Low-voltage circuit breakers including Molded Case Circuit Breakers (MCCB) and Air Circuit Breakers for safe and reliable power distribution.",
    image: "/images/cat_breakers.jpg"
  },
  {
    id: "motion-units",
    name: "Motion Control Units",
    description: "Multi-axis high-speed motion controllers and modules designed for synchronized speed, path, and position tracking.",
    image: "/images/cat_motion.jpg"
  },
  {
    id: "cncs",
    name: "Computerized Numerical Controllers (CNCs)",
    description: "Advanced computerized numerical controllers offering high-speed processing, absolute precision, and integration with e-F@ctory systems.",
    image: "/images/cat_cnc.jpg"
  },
  {
    id: "software",
    name: "Industrial Software",
    description: "Engineering software tools like MELSOFT GX Works, GT Works, and MT Developer for programming, commissioning, and system maintenance.",
    image: "/images/cat_software.jpg"
  }
];

export const initialProducts = [
  {
    id: "melsec-fx5u",
    name: "MELSEC FX5U Series PLC",
    categorySlug: "controllers",
    summary: "Next-generation micro PLC with integrated analog control, Ethernet port, and high-speed multi-axis positioning capability.",
    description: "The MELSEC iQ-F series represents the pinnacle of micro controller technology. The FX5U model features high-speed processing (0.034 µs/instruction), massive built-in memory (64,000 steps), and preloaded features including 2 analog inputs, 1 analog output, and an Ethernet interface. Highly expandable, it supports direct module coupling for advanced analog, positioning, and network integrations in e-F@ctory environments.",
    features: [
      "Built-in 2-channel analog input and 1-channel analog output",
      "High-speed counter inputs (up to 200 kHz) and pulse outputs",
      "Built-in Ethernet and RS-485 communication ports",
      "SD memory card slot for data logging and program storage",
      "Robust programming with GX Works3 software"
    ],
    specifications: {
      "Instruction Speed": "0.034 µs / basic instruction",
      "Program Memory": "64k steps",
      "Built-in I/O": "32 points (expandable up to 512 points)",
      "Communication": "Ethernet (1 port), RS-485 (1 port)",
      "Analog Control": "Built-in (2 inputs, 1 output)"
    },
    imageUrl: "/images/products/fx5u.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iMCk2mJAq14",
    catalogUrl: "#"
  },
  {
    id: "melsec-fx3u",
    name: "MELSEC FX3U Series PLC",
    categorySlug: "controllers",
    summary: "High-speed classic expandable PLC with up to 384 I/O points and independent 3-axis simple positioning.",
    description: "The FX3U is the original third-generation high-speed PLC from Mitsubishi Electric. Featuring a cycle time of just 0.065 µs per basic instruction, it offers modular expandability to support complex inputs/outputs and analog boards. It supports up to three independent axes of simple positioning and is widely preferred for robust packaging and textile machine automation in Pune and India.",
    features: [
      "High speed processing of 0.065 µs per instruction",
      "Expandable from 16 to 384 I/O points",
      "Built-in high-speed counter inputs and pulse output trains",
      "Dual system-bus architecture for communication & analog modules",
      "Large memory capability of 64,000 steps"
    ],
    specifications: {
      "Instruction Speed": "0.065 µs / basic instruction",
      "Program Memory": "64k steps",
      "Max I/O Points": "384 points",
      "Positioning Control": "Built-in 3 axes (100 kHz pulse output)",
      "Software Compatibility": "GX Works2 / GX Developer"
    },
    imageUrl: "/images/products/fx3u.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iMCk2mJAq14",
    catalogUrl: "#"
  },
  {
    id: "melsec-q",
    name: "MELSEC Q Series Modular PLC",
    categorySlug: "controllers",
    summary: "High-performance modular programmable logic controller designed for large-scale production line controls.",
    description: "The MELSEC-Q Series modular controller is a multi-discipline automation platform. With multiple CPU combinations on a single base unit (PLC, Motion, CNC, Robot, and PC), it supports highly complicated sequences and complex PID process control. Excellent choice for automotive, metal processing, and massive water treatment utilities.",
    features: [
      "Multi-CPU architecture for simultaneous PLC, motion, and process control",
      "High-speed system bus and high-density I/O routing",
      "Hot-swapping of modules without shutting down operations",
      "Seamless integration with CC-Link IE high-speed industrial network",
      "Redundant CPU option for continuous mission-critical reliability"
    ],
    specifications: {
      "Instruction Speed": "9.5 ns / basic instruction",
      "Program Capacity": "Up to 1000k steps",
      "Max local I/O": "4096 points",
      "Multi-CPU support": "Up to 4 CPUs on a single base rack",
      "Network integration": "CC-Link, CC-Link IE, Ethernet, Profibus"
    },
    imageUrl: "/images/products/qseries.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iMCk2mJAq14",
    catalogUrl: "#"
  },
  {
    id: "goc-43",
    name: "GOC 43 Graphic Operation Controller",
    categorySlug: "hmi",
    summary: "Integrated compact PLC with 4.3-inch color touchscreen display and rich digital/analog I/O combinations.",
    description: "The GOC43 is an elegant all-in-one controller designed, engineered, and manufactured for cost-sensitive automation markets. Integrating a 4.3-inch graphic touch LCD with a built-in logic controller, it saves dashboard cabinet space and eliminates complex wiring between screen and CPU. It features multi-language display support including regional Indian languages, and supports modular extension options.",
    features: [
      "4.3-inch color TFT display with 65k colors",
      "All-in-one design (integrated logic controller + screen interface)",
      "Supports 16 digital inputs, 12 digital outputs, and analog slots",
      "Multi-language support (Hindi, Tamil, Marathi, Japanese, etc.)",
      "Integrated communication ports: RS-232, RS-485, and Ethernet options"
    ],
    specifications: {
      "Screen Size": "4.3 inch Color Touch Panel",
      "Resolution": "480 x 272 pixels",
      "Built-in digital I/O": "Up to 28 points",
      "Analog Capability": "V/I input & RTD/TC temperature support",
      "Memory Capacity": "512 KB Program Memory"
    },
    imageUrl: "/images/products/goc43.jpg",
    youtubeUrl: "https://www.youtube.com/embed/4OVCmdxR6y0",
    catalogUrl: "#"
  },
  {
    id: "goc-35",
    name: "GOC 35 Graphic Operation Controller",
    categorySlug: "hmi",
    summary: "Space-saving 3.5-inch Graphic Operation Controller with physical keys, analog routing, and dual-port serial communications.",
    description: "The GOC35 combines a 3.5-inch graphic display (with physical button keypads for rugged operations) and a robust micro PLC. Ideal for standalone pump controls, small packaging machines, and utility automation, it operates flawlessly in high-temperature, dust-prone workshop conditions.",
    features: [
      "3.5-inch monochrome display with 128 x 64 resolution",
      "Dual interface design (HMI touchscreen with rugged key membrane)",
      "Integrated high-speed counters and pulse routing capabilities",
      "Dual serial communication ports (RS232 & RS485 built-in)",
      "Ultra-compact DIN rail mounting profile"
    ],
    specifications: {
      "Screen Size": "3.5 inch display",
      "User Inputs": "Touch screen + 10 functional membrane keys",
      "Communication": "RS-232 & RS-485",
      "Digital I/O config": "16 Inputs, 12 Outputs (Transistor/Relay)",
      "Voltage": "24V DC operating power"
    },
    imageUrl: "/images/products/goc35.jpg",
    youtubeUrl: "https://www.youtube.com/embed/4OVCmdxR6y0",
    catalogUrl: "#"
  },
  {
    id: "melhmi-got",
    name: "GOT2000 Series HMI",
    categorySlug: "hmi",
    summary: "Premium human-machine interface offering multitouch screen gestures, advanced graphics, and mobile device mirroring.",
    description: "The GOT2000 series sets a new benchmark in screen operation terminals. Featuring tablet-like pinch-to-zoom and sweep gestures, crystal-clear high-definition color LCD grids, and remote access capabilities. It allows operators to monitor machine status from remote tablets via integrated web servers, enhancing smart-factory maintenance operations.",
    features: [
      "High resolution TFT LCD screen with multi-touch gestures",
      "Integrated SD card slot, USB ports, and high-speed Ethernet",
      "Integrated VNC server for remote monitoring via tablets/mobile devices",
      "FTP Server/Client for dynamic recipe file transfers",
      "Direct driver support for major industrial device manufacturers"
    ],
    specifications: {
      "Screen Options": "7 inch, 10.4 inch, 12.1 inch, 15 inch",
      "Colors": "65,536 colors / TFT",
      "Touch method": "Analog resistive / Projective capacitive",
      "Interface": "Ethernet, USB, RS-232, RS-422/485",
      "Data Storage": "SD Card compatibility"
    },
    imageUrl: "/images/products/got2000.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iMCk2mJAq14",
    catalogUrl: "#"
  },
  {
    id: "vfd-fr-a800",
    name: "FR-A800 High-Performance VFD Inverter",
    categorySlug: "drive-products",
    summary: "Flagship inverter drive offering vector control, auto-tuning, and built-in functional safety standards.",
    description: "The FR-A800 series is Mitsubishi Electric's premium inverter range. Providing exceptional motor control for induction and permanent magnet synchronous motors, it excels in cranes, hoists, extruders, and winding machines. Featuring built-in PLC functionality, it handles local logic controls without needing an external PLC, lowering overall cabinet budgets.",
    features: [
      "Real sensorless vector control for torque and speed precision",
      "Advanced auto-tuning for any induction or PM motor",
      "Integrated safety function: STO (Safe Torque Off) SIL2/PLd standard",
      "Built-in mini programming PLC logic capacity",
      "Dual channel USB port connectivity for simple tuning and setup"
    ],
    specifications: {
      "Power Range": "0.4 kW to 630 kW",
      "Output Frequency": "0.2 to 590 Hz",
      "Control Method": "V/f, Vector Control, Sensorless Vector",
      "Overload Capacity": "150% for 60 seconds (Heavy Duty)",
      "Communication protocols": "CC-Link, Modbus RTU, Profibus-DP, Ethernet"
    },
    imageUrl: "/images/products/fra800.jpg",
    youtubeUrl: "https://www.youtube.com/embed/jl-SiwAbb_U",
    catalogUrl: "#"
  },
  {
    id: "vfd-fr-e800",
    name: "FR-E800 Compact Smart VFD Inverter",
    categorySlug: "drive-products",
    summary: "Compact Ethernet-enabled smart drive with AI-based diagnostics and predictive maintenance support.",
    description: "The FR-E800 series is built for next-generation automated systems. It features built-in multi-protocol Ethernet ports, enabling simple connections to CC-Link IE, Modbus/TCP, and EtherNet/IP networks. Combined with advanced AI diagnostic logic, it detects motor insulation faults and cooling fan degradation before failures occur.",
    features: [
      "Dual Ethernet ports supporting multiple fieldbus networks simultaneously",
      "AI-driven diagnostic indicators for predictive maintenance",
      "Compact size with side-by-side DIN rail mounting capabilities",
      "Corrosive gas environment resistant conformal coating (standard)",
      "Integrated functional safety: STO capability"
    ],
    specifications: {
      "Power Range": "0.1 kW to 30 kW",
      "Voltage Class": "1-phase 200V, 3-phase 400V",
      "Communication": "CC-Link IE TSN, EtherNet/IP, Modbus/TCP, Profinet",
      "Diagnostic Engine": "AI-based dynamic system monitoring",
      "Ambient Temp": "-20°C to +60°C operating window"
    },
    imageUrl: "/images/products/fre800.jpg",
    youtubeUrl: "https://www.youtube.com/embed/7NduPbE8ggk",
    catalogUrl: "#"
  },
  {
    id: "melservo-jet",
    name: "MELSERVO-JET AC Servo Drive",
    categorySlug: "drive-products",
    summary: "Ultra-fast response AC Servo Amplifier supporting CC-Link IE TSN and high-resolution absolute encoders.",
    description: "The MELSERVO-JET AC Servo series delivers outstanding velocity response and precision control. Operating on the ultra-high-speed CC-Link IE TSN network, it supports multi-axis synchronization for high-speed packaging, pick-and-place, and electronic assembly lines. Built-in auto-tuning algorithm matches complex machinery loads within minutes.",
    features: [
      "Industry-leading speed frequency response of 2.5 kHz",
      "High resolution 22-bit absolute encoders (4,194,304 pulses/rev)",
      "CC-Link IE TSN high speed communication capability",
      "One-touch real-time tuning simplifies load matching",
      "Integrated machine resonance filter suppression"
    ],
    specifications: {
      "Amplifier Type": "MR-JET Series",
      "Speed Frequency": "2.5 kHz response rate",
      "Encoder Feedback": "22-bit absolute resolution",
      "Safety Standards": "STO (Safe Torque Off) SIL3",
      "Network Interface": "CC-Link IE TSN / Pulse Train"
    },
    imageUrl: "/images/products/mrjet.jpg",
    youtubeUrl: "https://www.youtube.com/embed/jl-SiwAbb_U",
    catalogUrl: "#"
  },
  {
    id: "melfa-robot",
    name: "MELFA Articulated & SCARA Robots",
    categorySlug: "robots",
    summary: "High-speed multi-joint robotic arms designed for pick-and-place, sorting, and precision mechanical assembly.",
    description: "MELFA industrial robots represent precision engineering. Offering a complete lineup of vertically articulated 6-axis arms and SCARA 4-axis pickers, they combine high-resolution servo feedback with powerful controller software. Capable of executing micro-assembly actions down to +/- 0.02 mm tolerances, they integrate with e-F@ctory systems.",
    features: [
      "Vertically articulated 6-axis and SCARA 4-axis arm designs",
      "High speed cycles: up to 120 cycles per minute continuous performance",
      "Integrated force sensor options for delicate assembly feedback",
      "Simple 3D simulation programming using RT ToolBox3",
      "Direct tracking support for conveyor synchronization"
    ],
    specifications: {
      "Reach Range": "500 mm to 1500 mm",
      "Payload Capacity": "3 kg, 6 kg, 12 kg, 20 kg options",
      "Repeatability": "±0.02 mm positioning accuracy",
      "Controller Interface": "CR800 / CC-Link IE TSN connectivity",
      "Protection Rating": "IP67 dust/water resistant models"
    },
    imageUrl: "/images/products/melfarobot.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iMCk2mJAq14",
    catalogUrl: "#"
  },
  {
    id: "motion-cpu",
    name: "Multi-Axis Motion Controller CPU",
    categorySlug: "motion-units",
    summary: "Dedicated motion controllers supporting up to 96 axes of synchronized tracking and electronic cams.",
    description: "The Multi-Axis Motion CPU is designed to sit alongside the MELSEC PLC CPU on the system rack. Offloading complex mathematical tracking logic from the main PLC, it coordinates up to 96 servo axes in real-time. Features electronic cam curves, virtual axes, and advanced positioning profile generation for synchronous machinery.",
    features: [
      "Controls up to 96 servo axes synchronously",
      "Advanced electronic cam, gear, and differential gear configurations",
      "Pre-loaded software libraries for winding, flying shears, and rotary cutters",
      "Runs on high-speed fiber-optic SSCNET III/H network standard",
      "Synchronous program simulation tools within MT Developer2"
    ],
    specifications: {
      "Max Axis Sync": "96 axes",
      "Communication Link": "SSCNET III/H / CC-Link IE TSN",
      "Control Cycle": "0.22 ms (for 16 axes)",
      "Programming": "Structured text, SFC, and ladder diagrams",
      "Module form factor": "MELSEC Q / iQ-R series rack compatible"
    },
    imageUrl: "/images/products/motioncpu.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iMCk2mJAq14",
    catalogUrl: "#"
  }
];
