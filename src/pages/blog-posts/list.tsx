import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    DateField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";

export const BlogPostList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { dataGridProps } = useDataGrid();

    const columns = React.useMemo<GridColDef[]>(
      () => [
        {
          field: "gs1_id",
          headerName: translate("GS1 ID"),
          flex: 2,
          type: "number",
          minWidth: 150,
          rowId: "gs1_id",
        },
          {
              field: "txo_id",
              flex: 1,
              headerName: translate("TXO ID"),
              minWidth: 75,
              // renderCell: function render({ value }) {
              //     return <DateField value={value} />;
              // },
          },
          {
              field: "entity_type",
              flex: 1,
              headerName: translate("Entity Type"),
              minWidth: 200,
          },
          {
              field: "entity_name",
              flex: 1,
              headerName: translate("Entity Name"),
              minWidth: 200,
          },
          {
              field: "gs1_mapping",
              flex: 1,
              headerName: translate("GS1 Mapping"),
              minWidth: 100,
          },
         
          {
              field: "owning_gln",
              flex: 1,
              headerName: translate("Owning GLN"),
              type: "number",
              minWidth: 150,
          },
          {
              field: "contains_entities",
              flex: 1,
              headerName: translate("Contains Enttity"),
              minWidth: 100,
          },
          {
              field: "lat",
              flex: 1,
              headerName: translate("LAT"),
              type: "number",
              minWidth: 100,
          },
          {
              field: "lng",
              flex: 1,
              headerName: translate("LNG"),
              type: "number",
              minWidth: 100,
          },
          {
              field: "entity_status",
              flex: 1,
              headerName: translate("Status"),
              minWidth: 100,
          },
          {
              field: "valid_from",
              flex: 1,
              headerName: translate("Valid From"),
              minWidth: 150,
              renderCell: function render({ value }) {
                  return <DateField value={value} />;
              },
          },
          {
              field: "actions",
              headerName: translate("Actions"),
              sortable: false,
              renderCell: function render({ row }) {
                  return (
                      <>
                          <EditButton hideText recordItemId={row.id} />
                          <ShowButton hideText recordItemId={row.id} />
                          <DeleteButton hideText recordItemId={row.id} />
                      </>
                  );
              },
              align: "center",
              headerAlign: "center",
              minWidth: 80,
          },
      ],
      [translate],
  );
  const getRowId = (row: any) => row.gs1_id;
    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} getRowId={getRowId} autoHeight />
        </List>
    );
};


// this code giving the below error.
// Uncaught Error: MUI: The data grid component requires all rows to have a unique `id` property.
// Alternatively, you can use the `getRowId` prop to specify a custom id for each row.
// A row was provided without id in the rows prop:
// {"txo_id":"5.01","entity_type":"SOURCING LOCATION","entity_name":"ARDRA ORGANICS FARM - BEDDAMPATTI","gs1_mapping":"GLN","gs1_id":"8904368510015","owning_gln":"8904368510003","description":null,"instance_class":null,"stock_mgmt":null,"contains_entities":null,"address":null,"lat":12.505338,"lng":77.998942,"entity_status":"active","valid_from":"2023-05-01","valid_to":null,"scaling_factor":null,"weight_in_grams":null,"metadata":null}

// In this case "gs1_id" is the unique id we can replace with "id"
// please provide a solution.