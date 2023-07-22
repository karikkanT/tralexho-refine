import {
  useShow,
  IResourceComponentsProps,
  useTranslate,
} from "@refinedev/core";
import {
  Show,
  DateField,
  TextFieldComponent as TextField,
  NumberField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Stack gap={1}>
              <Typography variant="body1" fontWeight="bold">
                  {translate("TXO ID")}
              </Typography>
              <DateField value={record?.txo_id} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("Entity Type")}
              </Typography>
              <TextField value={record?.entity_type} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("Entity Name")}
              </Typography>
              <TextField value={record?.entity_name} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("GS1 Mapping")}
              </Typography>
              <TextField value={record?.gs1_mapping} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("entities.fields.id")}
              </Typography>
              <NumberField value={record?.id ?? ""} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("entities.fields.owning_gln")}
              </Typography>
              <NumberField value={record?.owning_gln ?? ""} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("entities.fields.lat")}
              </Typography>
              <NumberField value={record?.lat ?? ""} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("entities.fields.lng")}
              </Typography>
              <NumberField value={record?.lng ?? ""} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("entities.fields.entity_status")}
              </Typography>
              <TextField value={record?.entity_status} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("entities.fields.valid_from")}
              </Typography>
              <DateField value={record?.valid_from} />
          </Stack>
      </Show>
  );
};
