import { Button } from "@progress/kendo-react-buttons";

function Index() {
  const handleOnClick = () => {
    window.open("https://www.telerik.com/kendo-react-ui/components/", "_blank");
  };

  return (
    <Button themeColor={"primary"} size={"large"} onClick={handleOnClick}>
      Learn KendoReact
    </Button>
  );
}

export default Index;
