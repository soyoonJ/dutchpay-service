import { useState } from 'react';
import CenteredOverlayForm from './shared/CenteredOverlayForm';
import { InputTags } from 'react-bootstrap-tagsinput';
import { useRecoilState, useRecoilValue } from 'recoil';
import { groupMemebersState } from '../state/groupMembers';
import { groupNameState } from '../state/groupName';
import { styled } from 'styled-components';

const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMemebersState);
  const groupName = useRecoilValue(groupNameState);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
  };
  const header = `${groupName} 그룹에 속한 사람들의 이름을 모두 적어 주세요.`;

  return (
    <CenteredOverlayForm
      title={header}
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <InputTags
        placeholder="이름 간 띄어 쓰기"
        onTags={(value) => setGroupMembers(value.values)}
        data-testId="input-member-names"
      />
      {validated && groupMembers.length === 0 && (
        <StyledErrorMessage>
          그룹 멤버들의 이름을 입력해 주세요.
        </StyledErrorMessage>
      )}
    </CenteredOverlayForm>
  );
};

export default AddMembers;

const StyledErrorMessage = styled.span`
  color: red;
`;
