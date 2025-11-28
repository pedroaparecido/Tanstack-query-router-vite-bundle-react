import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/products/$productId')({
    component: Products
})

function Products() {
    const { productId } = Route.useParams()

    return<>Produto id: {productId}</>
}