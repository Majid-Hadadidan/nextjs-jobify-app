import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletJobAction } from "@/utils/actions";
import { Button } from "./ui/button";
import { toast } from "sonner";

function DeleteJobBtn({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: (id: string) => deletJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast("There wasa an error");
      }
      return;
    },
  });
  queryClient.invalidateQueries({ queryKey: ["jobs"] });
  queryClient.invalidateQueries({ queryKey: ["stats"] });
  queryClient.invalidateQueries({ queryKey: ["charts"] });
  toast("job remove");

  return (
    <Button size='sm' disabled={isPending} onClick={() => mutate(id)}>
      {isPending ? "deleting..." : "delete"}
    </Button>
  );
}
export default DeleteJobBtn;
