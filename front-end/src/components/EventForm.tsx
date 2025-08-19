import {
  Button,
  Dialog,
  DialogTrigger,
  Input,
  Label,
  Modal,
  ModalOverlay,
  TextField,
} from "react-aria-components";
import {
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { ChevronDown } from "lucide-react";
import { CheckboxGroup, Checkbox } from "react-aria-components";
import { use, useState } from "react";

type FormProp = {
  name: string;
  startDate: Date;
  endDate: Date;
  format: string;
  divisions: string[];
  debaterPrice: number;
  adjudicatorPrice: number;
  ghostJudgeFee: number;
  phaseLink: string;
  subsidizedLink: string;
  tournamentInvite: string;
};

function EventForm() {
  const [formData, setFormData] = useState({} as FormProp);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const form: FormProp = {
      name: data.get("name") as string,
      startDate: new Date(data.get("startDate") as string),
      endDate: new Date(data.get("endDate") as string),
      format: data.get("format") as string,
      divisions: data.getAll("divisions") as string[],
      debaterPrice: Number(data.get("debaterPrice")),
      adjudicatorPrice: Number(data.get("adjudicatorPrice")),
      ghostJudgeFee: Number(data.get("ghostJudgeFee")),
      phaseLink: data.get("phaseLink") as string,
      subsidizedLink: data.get("subsidizedLink") as string,
      tournamentInvite: data.get("tournamentInvite") as string,
    };

    console.log(form);
  };

  return (
    <DialogTrigger>
      <Button className="text-black">Create new event</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <form
              className="text-black flex flex-col space-y-2"
              onSubmit={handleSubmit}
            >
              <h1> Create Debate Tournament</h1>
              <TextField>
                <Label>Tournament Name</Label>
                <br></br>
                <Input
                  placeholder="Davao Novice Cup"
                  className="bg-gray-200 w-full p-2 rounded-md py-2"
                  name="name"
                />
              </TextField>
              <div className="flex">
                <TextField>
                  <Label>Start Date</Label>
                  <br></br>
                  <Input
                    className="bg-gray-200 w-8/12 min-w-[145px] xl:w-48 px-2 xl:pr-14 rounded-md py-2"
                    type="date"
                    name="startDate"
                  />
                </TextField>
                <TextField className="ml-auto">
                  <Label>End Date</Label>
                  <br></br>
                  <Input
                    className="bg-gray-200 w-8/12 min-w-[145px] xl:w-48 px-2 xl:pr-14 rounded-md py-2"
                    type="date"
                    name="endDate"
                  />{" "}
                </TextField>
              </div>
              <Select name="format">
                <Label>Format</Label>
                <Button>
                  <SelectValue />
                  <span aria-hidden="true">
                    <ChevronDown size={16} />
                  </span>
                </Button>
                <Popover>
                  <ListBox>
                    <ListBoxItem>Asian Parliamentary</ListBoxItem>
                    <ListBoxItem>British Parliamentary</ListBoxItem>
                  </ListBox>
                </Popover>
              </Select>

              <Label>Divisions</Label>

              <CheckboxGroup
                name="divisions"
                className="react-aria-CheckboxGroup"
              >
                <Checkbox value="Open" className="react-aria-Checkbox">
                  <div className="checkbox" aria-hidden="true">
                    <svg viewBox="0 0 18 18"></svg>
                  </div>
                  Open{" "}
                </Checkbox>
                <Checkbox value="Novice" className="react-aria-Checkbox">
                  <div className="checkbox" aria-hidden="true"></div>
                  Novice{" "}
                </Checkbox>
                <Checkbox value="High School" className="react-aria-Checkbox">
                  <div className="checkbox" aria-hidden="true"></div>
                  High School{" "}
                </Checkbox>
              </CheckboxGroup>
              <Label className="text-left react-aria-Label font-bold text-lg">
                Prices
              </Label>
              <div className="flex flex-col xl:flex-row ">
                <TextField>
                  <Label>Debater</Label>
                  <br></br>
                  <Input
                    placeholder="e.g, ₱400"
                    className="bg-gray-200 w-11/12 px-4 pr-4 rounded-md py-2"
                    name="debaterPrice"
                  />
                </TextField>
                <TextField className="xl:ml-auto">
                  <Label>Adjudicator</Label>
                  <br></br>
                  <Input
                    placeholder="e.g, ₱400"
                    className="bg-gray-200 w-11/12 px-4 pr-4 rounded-md py-2 "
                    name="adjudicatorPrice"
                  />
                </TextField>
                <TextField className="xl:ml-auto">
                  <Label>Ghost Judge Fee</Label>
                  <br></br>
                  <Input
                    placeholder="e.g, ₱400"
                    className="bg-gray-200 w-11/12 px-4 pr-4 rounded-md py-2 "
                    name="ghostJudgeFee"
                  />
                </TextField>
              </div>

              <Label className="text-left react-aria-Label font-bold text-lg">
                Registration Links
              </Label>
              <TextField>
                <Label>Phase 1 Link</Label>
                <br></br>
                <Input
                  placeholder="https://phase1link.com"
                  className="bg-gray-200 px-4 w-full rounded-md py-2"
                  name="phaseLink"
                />
              </TextField>
              <TextField>
                <Label>Subsidized Link</Label>
                <br></br>
                <Input
                  placeholder="https://phase1link.com"
                  className="bg-gray-200 px-4 w-full rounded-md py-2"
                  name="subsidizedLink"
                />
              </TextField>
              <TextField>
                <Label>Tournament Invite</Label>
                <br></br>
                <Input
                  placeholder="https://phase1link.com"
                  className="bg-gray-200 px-4 w-full rounded-md py-2"
                  name="tournamentInvite"
                />
              </TextField>
              <div className="flex gap-2 ml-auto mt-6">
                <Button
                  className="text-black bg-gray-300 p-2 px-5 rounded-md"
                  slot="close"
                >
                  Cancel
                </Button>
                <Button
                  className="text-white bg-black p-2 px-5 rounded-md"
                  type="submit"
                >
                  Create Tournament
                </Button>
              </div>
            </form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export default EventForm;
