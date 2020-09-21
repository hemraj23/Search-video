import axios from 'axios';

const KEY = 'AIzaSyCkP3w0zR5rSN8dX8CH2k-qScdcXfq_EIs';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxresult:'5',
        key:KEY
    }
});
