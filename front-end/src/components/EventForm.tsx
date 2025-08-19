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

function EventForm() {
  return (
    <DialogTrigger>
      <Button className="text-black">Create new event</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <form className="text-black flex flex-col">
              <h1> Create Debate Tournament</h1>
              <div className="flex">
                <TextField>
                  <Label>Start Date</Label>
                  <br></br>
                  <Input
                    className="bg-gray-200 px-4 pr-14 rounded-md py-2"
                    type="date"
                  />
                </TextField>
                <TextField className="ml-auto">
                  <Label>End Date</Label>
                  <br></br>
                  <Input
                    className="bg-gray-200 px-4 pr-14 rounded-md py-2"
                    type="date"
                  />{" "}
                </TextField>
              </div>
              <Select>
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

              <CheckboxGroup className="react-aria-CheckboxGroup">
                <Checkbox value="soccer" className="react-aria-Checkbox">
                  <div className="checkbox" aria-hidden="true">
                    <svg viewBox="0 0 18 18"></svg>
                  </div>
                  Open{" "}
                </Checkbox>
                <Checkbox value="baseball" className="react-aria-Checkbox">
                  <div className="checkbox" aria-hidden="true"></div>
                  Novice{" "}
                </Checkbox>
                <Checkbox value="basketball" className="react-aria-Checkbox">
                  <div className="checkbox" aria-hidden="true"></div>
                  High School{" "}
                </Checkbox>
              </CheckboxGroup>
              <div className="flex">
                <TextField>
                  <Label>Debater Price</Label>
                  <br></br>
                  <Input
                    placeholder="e.g, ₱400"
                    className="bg-gray-200 px-4 pr-4 rounded-md py-2"
                  />
                </TextField>
                <TextField className="ml-auto">
                  <Label>Adjudicator Price</Label>
                  <br></br>
                  <Input
                    placeholder="e.g, ₱400"
                    className="bg-gray-200 px-4 pr-4 rounded-md py-2 "
                  />
                </TextField>
              </div>

              <Label className="text-center react-aria-Label mt-2">
                Registration Links
              </Label>
              <TextField>
                <Label>Phase 1 Link</Label>
                <br></br>
                <Input
                  placeholder="https://phase1link.com"
                  className="bg-gray-200 px-4 w-full rounded-md py-2"
                />
              </TextField>
              <TextField>
                <Label>Subsidized Link</Label>
                <br></br>
                <Input
                  placeholder="https://phase1link.com"
                  className="bg-gray-200 px-4 w-full rounded-md py-2"
                />
              </TextField>
              <TextField>
                <Label>Tournament Invite</Label>
                <br></br>
                <Input
                  placeholder="https://phase1link.com"
                  className="bg-gray-200 px-4 w-full rounded-md py-2"
                />
              </TextField>
              <div className="flex gap-2 ml-auto mt-10">
                <Button
                  className="text-black bg-gray-300 p-2 px-5 rounded-md"
                  slot="close"
                >
                  Cancel
                </Button>

                <Button
                  className="text-white bg-black p-2 px-5 rounded-md"
                  slot="close"
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
