import { styled } from '@linaria/react';
import { type IconComponent } from 'twenty-ui/display';
import { FloatingIconButton } from 'twenty-ui/input';
import { MOBILE_VIEWPORT } from 'twenty-ui/theme';
import { AnimatedContainer } from 'twenty-ui/utilities';

const StyledButtonContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(1)};
  @media (max-width: ${MOBILE_VIEWPORT}px) {
    position: relative;
    right: 7px;
  }
`;

type RecordTableCellButtonProps = {
  onClick?: () => void;
  Icon: IconComponent;
};

export const RecordTableCellButton = ({
  onClick,
  Icon,
}: RecordTableCellButtonProps) => (
  <AnimatedContainer>
    <StyledButtonContainer>
      <FloatingIconButton size="small" onClick={onClick} Icon={Icon} />
    </StyledButtonContainer>
  </AnimatedContainer>
);
