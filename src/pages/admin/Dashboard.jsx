import styled from 'styled-components';
import { useState } from 'react';
import DashboardsBloc from './DashboardBloc';

const Container = styled.div`
  min-height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 70vw;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 250px;
`;

const Label = styled.label`
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Input = styled.input`
  margin: 5px 10px 0px 0px;
  padding: 10px;
`;

const Select = styled.select`
  margin: 5px 10px 0px 0px;
  padding: 10px;
`;

const Option = styled.option``;

const Button = styled.button`
  max-width: 150px;
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  margin: 1rem 0 0 0;
  transition: all 0.5s ease;
  display: block;
  display: flex;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: black;
    color: white;
  }
`;

const Dashboard = () => {
  const [trackerId, setTrackerId] = useState('');
  const [status, setStatus] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [item, setItem] = useState('');
  const [packageForm, setPackageForm] = useState('');
  const [weight, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [mode, setMode] = useState('');
  const [name, setName] = useState('');
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
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
    );

    // const data = {
    //   trackerId,
    //   status,
    //   start,
    //   end,
    //   item,
    //   packageForm,
    //   weight,
    //   quantity,
    //   mode,
    //   name,
    //   addressFrom,
    //   addressTo
    // };

    try {
      const isUpdate = await DashboardsBloc.updateProduct(
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
      );
      console.log('isUpdate', isUpdate);
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Form>
          <FormItem>
            <Label>Tracker ID</Label>
            <Input
              style={{ cursor: 'not-allowed' }}
              disabled
              value="5214467592"
              placeholder="Enter Tracker ID"
              type="text"
              onChange={(e) => setTrackerId(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Name of Reciever</Label>
            <Input
              required={true}
              pattern="^[A-Za]{3,16}$"
              placeholder="name of reciever"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Start Date</Label>
            <Input
              placeholder="Start Date"
              type="date"
              onChange={(e) => setStart(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>End Date</Label>
            <Input
              placeholder="End Date"
              type="date"
              onChange={(e) => setEnd(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Item</Label>
            <Input
              placeholder="Name of Item"
              type="text"
              onChange={(e) => setItem(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Package form</Label>
            <Input
              placeholder="Package form"
              type="text"
              onChange={(e) => setPackageForm(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Weight</Label>
            <Input
              placeholder="weight in kg"
              type="text"
              onChange={(e) => setWeight(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Quantity</Label>
            <Input
              placeholder="quantity"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Address to</Label>
            <Input
              placeholder="Recieve Location"
              type="text"
              onChange={(e) => setAddressTo(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Address from</Label>
            <Input
              placeholder="Send Location"
              type="text"
              onChange={(e) => setAddressFrom(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Mode of delivery</Label>
            <Input
              placeholder="Mode of delivery eg Flight, Sea"
              type="text"
              onChange={(e) => setMode(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Status</Label>
            <Select onChange={(e) => setStatus(e.target.value)}>
              <Option>Change Status</Option>
              <Option value="processing">Processing</Option>
              <Option value="transit">In Transit</Option>
              <Option value="ready">Ready For Pickup</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Label></Label>
            <Button onClick={handleSubmit}>Update</Button>
          </FormItem>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
