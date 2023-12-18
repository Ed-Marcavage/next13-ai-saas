import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
                <div>
                    <Link href="/sign-in">
                        <Button>
                            Login
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button>
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
