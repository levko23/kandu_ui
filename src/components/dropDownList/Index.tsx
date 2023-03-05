import {
  DropDownList,
  DropDownListChangeEvent,
} from "@progress/kendo-react-dropdowns";
import categories from "./categories.json";
import { useState } from "react";

function Index() {
  const [category, setCategory] = useState(null);

  const handleOnChange = (e: DropDownListChangeEvent) => {
    setCategory(e.target.value.CategoryID);
  };

  return (
    <div>
      <DropDownList
        data={categories}
        dataItemKey="CategoryID"
        textField="CategoryName"
        defaultItem={{ CategoryID: null, CategoryName: "Product categories" }}
        onChange={handleOnChange}
      />
      &nbsp; Selected category ID: <strong>{category}</strong>
    </div>
  );
}

export default Index;
