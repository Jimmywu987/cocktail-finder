import { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";

import { ChartModalContent } from "components/home/ChartModalContent";
import { FetchDrinkResultProps } from "pages/Home";

export const ChartModal = ({ data }: Pick<FetchDrinkResultProps, "data">) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          size="tiny"
          icon
          labelPosition="left"
          className="chart-button"
          disabled={!data || !data?.drinks}
        >
          <Icon name="chart pie" />
          Show charts
        </Button>
      }
    >
      <Modal.Header className="modal-header">
        <span>Charts</span>
        <i
          className="close icon"
          onClick={() => {
            setOpen(false);
          }}
        />
      </Modal.Header>
      <Modal.Content>
        {!data || !data?.drinks ? (
          <div>Chart data is not available</div>
        ) : (
          <ChartModalContent data={data.drinks} />
        )}
      </Modal.Content>
    </Modal>
  );
};
