import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function Component({ name, mode, pack, price }: { name: string, mode: string, pack: string, price: string }) {
  const min = pack.toLowerCase() === "custom" ? 0 : Number(price.split("-")[0]);
  const max = pack.toLowerCase() === "custom" ? Infinity : Number(price.split("-")[1]);
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8 px-4">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การชำระเงิน</CardTitle>
            <CardDescription>กรอกข้อมูลในการชำระเงินสำหรับการ{mode} {name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="cardNumber">เลขบัตรเครดิต</Label>
              <Input id="cardNumber" placeholder="4111 1111 1111 1111" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiration">วันหมดอายุ</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Select>
                    <SelectTrigger id="expiration-month">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="expiration-year">
                      <SelectValue placeholder="YY" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 2023} value={(i + 2023).toString()}>
                          {i + 2023}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cardholderName">ชื่อเจ้าของบัตร</Label>
                <Input id="cardholderName" placeholder="วรัตตรา วิภูศิริคุปต์" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">ราคาที่ต้องการ{mode} {name}</Label>
                <Input id="price" type="number" min={min} max={max} placeholder={price.toLowerCase() === "none" ? "เลือกราคาที่ต้องการ" : `${price} บาท`} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ตัวเลือกการชำระเงิน</CardTitle>
            <CardDescription>เลือกรูปแบบการชำระเงินที่ต้องการ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCardIcon className="mb-3 h-6 w-6" />
                  บัตรเครดิต
                </Label>
              </div>
              <div>
                <RadioGroupItem value="digital-wallet" id="digital-wallet" className="peer sr-only" />
                <Label
                  htmlFor="digital-wallet"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <WalletCardsIcon className="mb-3 h-6 w-6" />
                  ดิจิทัลวอลเล็ต
                </Label>
              </div>
              <div>
                <RadioGroupItem value="other" id="other" className="peer sr-only" />
                <Label
                  htmlFor="other"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <DollarSignIcon className="mb-3 h-6 w-6" />
                  อื่น ๆ
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การสรุปข้อมูลแพ็คเกจ</CardTitle>
            <CardDescription>ตรวจสอบความถูกต้องของแพ็คเกจ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>ราคาแพ็คเกจ</span>
                <span>฿99.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>ค่าจัดส่ง</span>
                <span>฿5.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>ส่วนลด</span>
                <span>-฿10.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-semibold">
                <span>ราคารวม</span>
                <span>฿94.00</span>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>จำนวน</span>
                <span>1</span>
              </div>
              <div className="flex items-center justify-between">
                <span>การจัดส่ง</span>
                <span>มาตรฐาน (3-5 วัน)</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button size="lg" className="w-full bg-pink-500 hover:bg-pink-400">
          ยืนยัน
        </Button>
      </div>
    </div>
  )
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function WalletCardsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}