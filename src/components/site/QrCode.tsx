import QRCode from "qrcode";

/**
 * A real, scannable QR code drawn as inline SVG at build time.
 * Demo passes encode a Certifyd page, never a worker's data.
 */
export async function QrCode({ value, label, size = 132 }: { value: string; label: string; size?: number }) {
  const svg = await QRCode.toString(value, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#0F1A2B", light: "#FFFFFF" } });
  return <span className="qr" role="img" aria-label={label} style={{ width: size, height: size }} dangerouslySetInnerHTML={{ __html: svg.replace(/<svg /, '<svg aria-hidden="true" focusable="false" ') }} />;
}
