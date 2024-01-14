export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iphone 14",
    description: "Short description",
    price: 2999,
    brand: "apple",
    category: "Phone",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image:
          "https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?w=1480&t=st=1700661369~exp=1700661969~hmac=e69f4b932204106f978fb3c949f9b87650f26a3d31db336f370887aec0a0105a",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image:
          "https://img.freepik.com/free-vector/digital-device-mockup_53876-89354.jpg?w=1480&t=st=1700661403~exp=1700662003~hmac=fb1d0cc23823b02766ba5d7aa135d9c3d165ee43866f30f438486493a7b52f16",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Logitech MX Keys Advanced Wireless Illuminated Keyboard, Tactile Responsive Typing, Backlighting, Bluetooth, USB-C, Apple macOS, Microsoft Windows, Linux, iOS, Android, Metal Build (Black)",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 102.99,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://img.freepik.com/free-vector/keyboard-cartoon_78370-505.jpg?w=1060&t=st=1700667503~exp=1700668103~hmac=5b5b6c34a20c1982b2324e2f20b41e70752adf5e6daf740095e07d3eb884118b",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Apple iPhone 12, 64GB",
    description:
      'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: 40,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-81688.jpg?w=1060&t=st=1700667605~exp=1700668205~hmac=3b775f420ce6c3bd46985cd2c267523b84e95adb7be4447065e49d0a9cb4956c",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image:
          "https://img.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg?w=1480&t=st=1700667626~exp=1700668226~hmac=df3b50f62a95bf239b51783aeedb6ace66a0da12ff5c280de6a8fd796feeaf2d",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:
          "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?w=1480&t=st=1700667642~exp=1700668242~hmac=85d2cdc00d5587a0cbe3cd36977d18f1086e04c449d4607882157c46191932bb",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 70,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image:
          "https://img.freepik.com/free-vector/wireless-computer-mouse-with-led-lights-3d-illustration-cartoon-drawing-tool-playing-games-home-working-office-3d-style-white-background-technology-equipment-concept_778687-694.jpg?w=1480&t=st=1700667701~exp=1700668301~hmac=11f666c1d31dfcd689e1a7927aa359e2d4c4697bc546626ff2bb1bd6713e1a48",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://img.freepik.com/free-vector/realistic-fitness-tracker-illustration_23-2148521366.jpg?w=1480&t=st=1700667742~exp=1700668342~hmac=c75ef51b7781c98a198825083485e828ca61efbc604d0c715f82ce895c3ca93b",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "https://img.freepik.com/premium-photo/modern-technology-science-biology-object-concept-close-up-black-smart-watch-virtual-screen-molecular-projections_380164-117408.jpg?w=1060",
      },
    ],
    reviews: [],
  },
];
