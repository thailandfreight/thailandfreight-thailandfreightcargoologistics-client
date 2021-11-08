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
    trackerId: '282823267405',
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
    addressTo: addressTo
  };

  try {
    const res = await DashboardsRepository.updateProduct(data);
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
