import { CONFIG } from "../config";

export default function GiftSection({ t }: { t: any }) {
  const qrUrl = `https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl=${encodeURIComponent(
    CONFIG.paymentUrl
  )}`;
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-semibold mb-3">{t("gift")}</h3>
      <img
        src={qrUrl}
        alt="QR code per pagamento"
        className="mx-auto w-56 h-56"
      />
      <p className="mt-3 text-sm break-all">{CONFIG.paymentUrl}</p>
    </div>
  );
}
