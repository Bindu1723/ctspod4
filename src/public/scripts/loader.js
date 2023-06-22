import 'bootstrap/dist/css/bootstrap.css';
import contentComponent from '../../components/contentComponent.vue';
import adComponentH from '../../components/adComponentH.vue';
import adComponentV from '../../components/adComponentV.vue';
import config from '@/config/config';

export default {
  name: 'lazyLoad',
  components: {
    contentComponent,
    adComponentH,
    adComponentV,
  },
  data() {
    return {
      showComponentV1: config.showComponentV1,
      showComponentV2: config.showComponentV2,
      showComponentH: config.showComponentH,
    };
  },
};
