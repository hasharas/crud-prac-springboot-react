

import axios from 'axios';

class HttpService {
      constructor() {
            this.service = axios.create();
            this.service.interceptors.response.use(
                  this.handleSuccess,
                  this.handleError
            );
      }
      sendRequst = async () => {

      }

      handleSuccess = () => {

      }

      handleError = (error) => {
            if (!error.responce) {
                  return {
                        success: false,
                        message: 'network errorr,try again',
                        data: null
                  };
            }
            // const status = error.responce.status;
            // if([])

            return Promise.reject(error);

      }


}

export default HttpService;