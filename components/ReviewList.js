app.component("review-list", {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /* html */
    `
        <div class="review-container">
        <h3>Reviews</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} 님이 {{ review.rating }} 별점을 줌
                    <br>
                    "{{ review.review }}"
                    <br>
                    Recommended: {{ review.recommend }}
                </li>
            </ul>
        </div>
    `
})