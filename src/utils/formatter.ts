export function formatPhone(phone: string) {
    // Remove tudo que não for número
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length <= 10) {
    // Formato fixo: (99) 9999-9999
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    }
    // Formato celular: (99) 99999-9999
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
}

export function formatCPF(cpf: string) {
    const cleaned = cpf.replace(/\D/g, "");
    return cleaned
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatRG(rg: string) {
    const cleaned = rg.replace(/\D/g, "");
    return cleaned
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1})$/, "$1-$2");
}