import { useAppSelector } from "../../app/hooks";
import {
  Button,
  FormFildes,
  FormGroupe,
  InfoContainer,
  InfoTransactions,
  InfoTransactionsItem,
  InfoTransactionsTitle,
  InfoUsers,
  InfoUsersItem,
  InfoUsersTitle,
  Navigation,
  NavigationItem,
  Title,
  TransactionForm,
} from "./familyInfo.components";
import {
  BsFillArrowLeftCircleFill,
  BsFillPlusCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { TransactionData } from "../../types";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setDashboardAdminLocation } from "../../features/dashboard/dashboardSlice";
import { addMoney } from "../../features/family/familySlice";
const FamilyInfo = () => {
  const { family } = useAppSelector((state) => state.family);
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<TransactionData>({
    name: "",
    amount: 0,
  });

  const handleChangeOnlyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]*$/)) {
      setFormData((prev) => ({ ...prev, amount: Number(e.target.value) }));
    }
  };
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name.length > 0 && formData.amount > 0 && family) {
      setShowForm(false);
      setFormData({ name: "", amount: 0 });
      dispatch(addMoney({ ...formData, familyId: family._id }));
    }
  };

  return (
    <>
      <Title>Rodzina: {family?.name} </Title>
      <Navigation>
        <NavigationItem
          onClick={() => dispatch(setDashboardAdminLocation("familyList"))}
        >
          <BsFillArrowLeftCircleFill fontSize={22} /> Powrót do listy
        </NavigationItem>
        <NavigationItem onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? (
            <BsFillXCircleFill fontSize={22} />
          ) : (
            <BsFillPlusCircleFill fontSize={22} />
          )}
          Dodaj fundusze
        </NavigationItem>
      </Navigation>
      {showForm && (
        <TransactionForm onSubmit={formSubmit}>
          <FormFildes>
            <FormGroupe>
              <label>Nazwa transakcji</label>
              <input
                value={formData.name}
                type="text"
                name="name"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Nazwa transakcji"
              />
            </FormGroupe>
            <FormGroupe>
              <label>Kwota</label>
              <input
                value={formData.amount}
                onChange={handleChangeOnlyNumber}
                type="text"
                name="amount"
              />
            </FormGroupe>
          </FormFildes>
          <Button>Dodaj</Button>
        </TransactionForm>
      )}
      <InfoContainer>
        <InfoUsers>
          <InfoUsersTitle>Członkowie rodziny</InfoUsersTitle>
          {family?.familyMembers.map(({ _id, firstName, lastName }) => (
            <InfoUsersItem key={_id}>
              {firstName} {lastName}
            </InfoUsersItem>
          ))}
        </InfoUsers>
        <InfoTransactions>
          <InfoTransactionsTitle>
            Transakcje <p>Saldo: {family?.cash} zł</p>
          </InfoTransactionsTitle>
          {family?.transactions.map(
            ({ _id, name, amount, user, transactionType }) => (
              <InfoTransactionsItem key={_id}>
                <p>{name}</p>
                <p>{user}</p>
                <p>{transactionType === "MINUS" ? "- " + amount : amount} zł</p>
              </InfoTransactionsItem>
            )
          )}
        </InfoTransactions>
      </InfoContainer>
    </>
  );
};

export default FamilyInfo;
