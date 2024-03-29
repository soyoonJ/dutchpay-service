import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CenteredOverlayForm from './shared/CenteredOverlayForm';
import { useSetRecoilState } from 'recoil';
import { groupNameState } from '../state/groupName';

const CreateGroup = () => {
  const [validated, setValidated] = useState(false);
  const [validGroupName, setValidGroupName] = useState(false);
  const setGroupName = useSetRecoilState(groupNameState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setValidGroupName(true);
    } else {
      e.stopPropagation();
      setValidGroupName(false);
    }
    setValidated(true);
  };
  return (
    <CenteredOverlayForm
      title="먼저, 더치 페이 할 그룹의 이름을 정해볼까요?"
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <Form.Group controlId="validationGroupName">
        <Form.Control
          type="text"
          required
          placeholder="2022 제주도 여행"
          onChange={(e) => setGroupName(e.target.value)}
        ></Form.Control>
        <Form.Control.Feedback type="invalid" data-valid={validGroupName}>
          그룹 이름을 입력해 주세요.
        </Form.Control.Feedback>
      </Form.Group>
    </CenteredOverlayForm>
  );
};

export default CreateGroup;
