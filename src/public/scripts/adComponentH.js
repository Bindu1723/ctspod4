// export default {
//   name: 'adComponent',
//   data() {
//     return {
//       ads: [],
//     };
//   },
//   mounted() {
//     this.fetchAds();
//     setInterval(() => {
//       this.fetchAds();
//     }, 8000);
//   },
//   methods: {
//     async fetchAds() {
//       const fetchedAds = await Ad.find({}).select({
//         imageUrl: 1,
//         redirectURl: 0,
//         _id: 0,
//         title: 0,
//         id: 0,
//         TTL: 0,
//         type: 0,
//       });
//       console.log(fetchedAds);
//       this.ads = fetchedAds;
//     },
//   },
// };

export default {
  name: 'adComponent',
  data() {
    return {
      imageIds1: [],
      imageIds2: [],
    };
  },
  mounted() {
    this.generateImageIds();
    setInterval(() => {
      this.generateImageIds();
    }, 8000);
  },
  methods: {
    generateImageIds() {
      const ids1 = [];
      const ids2 = [];
      while (ids1.length < 2) {
        const id1 = Math.floor(Math.random() * 1000);
        if (!ids1.includes(id1)) {
          ids1.push(id1);
        }
      }
      this.imageIds1 = ids1;

      while (ids2.length < 2) {
        const id2 = Math.floor(Math.random() * 1000) + 40;
        if (!ids2.includes(id2)) {
          ids2.push(id2);
        }
      }
      this.imageIds2 = ids2;
    },
  },
};
