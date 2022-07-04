import { useAppSelector } from "../../app/hooks";
import moment from "moment";
import "moment/locale/pl";
import {
  Title,
  Transaction,
  TransactionsList,
} from "./transactions.components";

const Transactions = () => {
  const { family } = useAppSelector((state) => state.family);

  const getData = (date: Date): string => {
    moment.locale("pl");
    return moment(date).format("LLL");
  };
  return (
    <>
      <Title>Transakcje</Title>
      {family?.transactions && family?.transactions.length > 0 ? (
        <TransactionsList>
          {family.transactions.map(
            ({ _id, name, user, amount, transactionType, createdAt }) => (
              <Transaction key={_id}>
                <div>{name}</div>
                <div>{getData(createdAt)}</div>
                <div>{user}</div>
                <div>
                  {transactionType === "MINUS" ? "- " + amount : amount} zł
                </div>
              </Transaction>
            )
          )}
        </TransactionsList>
      ) : (
        <div>Brak Ttransakcji</div>
      )}
    </>
  );
};

export default Transactions;
