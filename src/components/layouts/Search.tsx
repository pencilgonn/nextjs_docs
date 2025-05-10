import Modal from "../ui/modal";

type Props = {} & React.ComponentProps<"div">;

const Search: React.FC<Props> = ({ children }) => {
  return (
    <Modal
      trigger={children}
      className="max-w-[600px] outline-0 border-gray-300/20 rounded-lg"
    >
      Search...
    </Modal>
  );
};

export default Search;
