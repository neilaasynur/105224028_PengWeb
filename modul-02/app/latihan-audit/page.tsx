export default function LatihanAudit() {
    return (
        <div className="p-8">
            <div className="text-2xl font-bold">Katalog Alat Laboratorium</div>
            <img src="/next.svg" alt="Logo of Next.js" width={120} height={24} />
            <p className="text-gray-700">Stok diperbarui setiap hari.</p>
            <label htmlFor="cari-stok" >Cari-stok:</label>
            <input type="search" id="cari-stok" className="border p-2" />
            <button aria-label="Search product">
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" fill="none" />
                </svg>
            </button>
        </div>
    );
}
