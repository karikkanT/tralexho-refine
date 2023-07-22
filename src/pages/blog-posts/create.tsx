import { Create } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";

export const BlogPostCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        control,
        formState: { errors },
    } = useForm();

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                <TextField
                    {...register("txo_id", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.txo_id}
                    helperText={(errors as any)?.txo_id?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label={translate("TXO ID")}
                    name="txo_id"
                />
                <TextField
                    {...register("entity_type", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.entity_type}
                    helperText={(errors as any)?.entity_type?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={translate("Entity Type")}
                    name="entity_type"
                />
                <TextField
                    {...register("entity_name", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.entity_name}
                    helperText={(errors as any)?.entity_name?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={translate("Entity Name")}
                    name="entity_name"
                />
                <TextField
                    {...register("gs1_mapping", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.gs1_mapping}
                    helperText={(errors as any)?.gs1_mapping?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={translate("entities.fields.gs1_mapping")}
                    name="gs1_mapping"
                />
                <TextField
                    {...register("owning_gln", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.owning_gln}
                    helperText={(errors as any)?.owning_gln?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label={translate("entities.fields.owning_gln")}
                    name="owning_gln"
                />
                <TextField
                    {...register("contains_entities", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.contains_entities}
                    helperText={(errors as any)?.contains_entities?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={translate("entities.fields.contains_entities")}
                    name="contains_entities"
                />
                <TextField
                    {...register("lat", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.lat}
                    helperText={(errors as any)?.lat?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label={translate("entities.fields.lat")}
                    name="lat"
                />
                <TextField
                    {...register("lng", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.lng}
                    helperText={(errors as any)?.lng?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label={translate("entities.fields.lng")}
                    name="lng"
                />
                <TextField
                    {...register("entity_status", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.entity_status}
                    helperText={(errors as any)?.entity_status?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={translate("entities.fields.entity_status")}
                    name="entity_status"
                />
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                <TextField
                    {...register("valid_from", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.valid_from}
                    helperText={(errors as any)?.valid_from?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label={translate("entities.fields.valid_from")}
                    name="valid_from"
                />
            </Box>
        </Create>
    );
};
