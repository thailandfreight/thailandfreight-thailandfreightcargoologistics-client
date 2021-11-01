import NetworkConfig from '../../NetworkConfig';
import NetworkProvider from '../../NetworkProvider';

const updateProduct = async (data) => {
  console.log('dataRepo');
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

const DashboardsRepository = {
  updateProduct
};

export default DashboardsRepository;
