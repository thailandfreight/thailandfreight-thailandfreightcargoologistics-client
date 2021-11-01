import DashboardsRepository from './DashboardRepository';

// UPDATE SINGLE PRODUCT
const updateProduct = async (
  trackerId,
  status,
  start,
  end,
  item,
  packageForm,
  weight,
  quantity,
  mode,
  name,
  addressFrom,
  addressTo
) => {
  const data = {
    trackerId: '5214467592',
    status: status,
    start: start,
    end: end,
    item: item,
    packageForm: packageForm,
    weight: weight,
    quantity: quantity,
    mode: mode,
    name: name,
    addressFrom: addressFrom,
    addressT: addressTo
  };
  console.log('data_bloc', data);
  try {
    const res = await DashboardsRepository.updateProduct(data);
    console.log(res);
    return res;
  } catch (err) {
    const errorMessage = {
      statusCode: 400,
      error: err
    };
    throw errorMessage;
  }
};

const DashboardsBloc = {
  updateProduct
};

export default DashboardsBloc;
