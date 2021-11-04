import NetworkConfig from '../../NetworkConfig';
import NetworkProvider from '../../NetworkProvider';

const singleProduct = async (params) => {
  try {
    const res = await NetworkConfig({
      path: NetworkProvider().SINGLE_TRACKER(params),
      body: '',
      method: 'get'
    });
    return res;
  } catch (e) {
    throw e;
  }
};

const updateProduct = async (data) => {
  try {
    const res = await NetworkConfig({
      path: NetworkProvider().UPDATE_TRACKER(data.trackerId),
      body: data,
      method: 'put'
    });
    return res;
  } catch (e) {
    throw e;
  }
};

const TracksRepository = {
  singleProduct,
  updateProduct
};

export default TracksRepository;
