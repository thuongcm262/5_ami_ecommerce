import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Container>
        <h2>Home</h2>
        <p>
          Kiểm tra phông chữ Tiếng Việt, Đây là một đoạn văn bản ngắn bất kỳ,
          BAO GỒM CẢ CÁC KÝ TỰ ĐƯỢC VIẾT IN HOA
        </p>
        <Button size="lg">Check out</Button>
      </Container>
    </div>
  );
}
