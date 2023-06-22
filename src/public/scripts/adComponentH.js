import { Ad } from '@/model/ad';

export default {
  name: 'adComponent',
  data() {
    return {
      ads: [],
    };
  },
  mounted() {
    this.fetchAds();
    setInterval(() => {
      this.fetchAds();
    }, 8000);
  },
  methods: {
    async fetchAds() {
      const fetchedAds = await Ad.find({}).select({
        imageUrl: 1,
        redirectURl: 0,
        _id: 0,
        title: 0,
        id: 0,
        TTL: 0,
        type: 0,
      });
      this.ads = fetchedAds;
    },
  },
};
