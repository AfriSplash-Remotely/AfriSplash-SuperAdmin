import PropTypes, { InferProps } from "prop-types";

const JobDetailsProps = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default JobDetailsProps;
