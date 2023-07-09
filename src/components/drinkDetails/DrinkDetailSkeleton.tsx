import Skeleton from "react-loading-skeleton";
import { Grid } from "semantic-ui-react";

export const DrinkDetailSkeleton = () => {
  return (
    <section className="drink-detail-section">
      <Grid stackable className="drink-detail-grid">
        <Grid.Column width={6}>
          <Skeleton height="480px" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Skeleton
            height="40px"
            style={{ margin: "10px 0 5px" }}
            width="70px"
          />
          <Skeleton height="40px" style={{ margin: "5px 0" }} width="100px" />
          <Skeleton height="300px" style={{ margin: "5px 0" }} />
          <Skeleton height="40px" style={{ margin: "5px 0" }} />
        </Grid.Column>
      </Grid>
    </section>
  );
};
