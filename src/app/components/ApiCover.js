export default function ApiCover() {
  return (
    <span className="api-cover" aria-hidden="true">
      <span className="api-req">
        <b>POST</b> /upload <i>sales_2025.csv</i>
      </span>
      <span className="api-res">
        <span className="api-status">201 Created</span>
        {"{"}
        <br />
        &nbsp;&nbsp;<em>&quot;message&quot;</em>: &quot;File uploaded successfully&quot;,
        <br />
        &nbsp;&nbsp;<em>&quot;file_id&quot;</em>: &quot;9f2c…e41a&quot;,
        <br />
        &nbsp;&nbsp;<em>&quot;file_extension&quot;</em>: &quot;csv&quot;
        <br />
        {"}"}
      </span>
    </span>
  );
}
