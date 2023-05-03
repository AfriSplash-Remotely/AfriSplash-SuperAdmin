import React from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";

const SearchProps = {
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.string,
  childClasses: PropTypes.string,
};
export default function Search({
  placeholder,
  fieldsetClass,
  textClass
}: InferProps<typeof SearchProps>): JSX.Element {
  return (
    <fieldset className={`border-0 ${fieldsetClass}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`focus:outline-none w-full pr-8 ${textClass}`}
      />
    </fieldset>
  );
}
