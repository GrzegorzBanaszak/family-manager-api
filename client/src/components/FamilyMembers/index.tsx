import { useAppSelector } from "../../app/hooks";
import { FamilyList, Member, Title } from "./familyMembers.components";

const FamilyMembers = () => {
  const { family } = useAppSelector((state) => state.family);
  return (
    <>
      <Title>Członkowie rodziny</Title>
      <FamilyList>
        {family?.familyMembers &&
          family?.familyMembers.map(({ _id, email, firstName, lastName }) => (
            <Member key={_id}>
              <div>
                {firstName} {lastName}
              </div>
              <div>{email}</div>
            </Member>
          ))}
      </FamilyList>
    </>
  );
};

export default FamilyMembers;
