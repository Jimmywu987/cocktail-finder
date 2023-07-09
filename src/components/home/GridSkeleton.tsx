import Skeleton from "react-loading-skeleton";

export const GridSkeleton = () => {
  return (
    <div className="grid-skeleton">
      <Skeleton />
      <Skeleton
        height="20px"
        width="120px"
        style={{ margin: "10px 1rem 5px" }}
      />
      <Skeleton height="15px" width="160px" style={{ margin: "5px 1rem" }} />
      <Skeleton height="10px" width="90%" style={{ margin: "0px 1rem" }} />
      <Skeleton height="10px" width="90%" style={{ margin: "0px 1rem" }} />
      <Skeleton height="30px" width="100%" style={{ margin: "10px 0rem" }} />
    </div>
  );
};
