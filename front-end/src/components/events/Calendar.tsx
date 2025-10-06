import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  Text,
} from "react-aria-components";

export default function EventCalendar() {
  return (
    <DatePicker>
      <Label />
      <Group>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
        <Button />
      </Group>
      <Text slot="description" />
      <FieldError />
      <Popover>
        <Dialog>
          <Calendar>
            <Button slot="previous" />
            <Heading />
            <Button slot="next" />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell />}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
            <Text slot="errorMessage" />
          </Calendar>
        </Dialog>
      </Popover>
    </DatePicker>
  );
}
