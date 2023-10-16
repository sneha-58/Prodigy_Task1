function onclick1()
{
    document.write("The beauty of Paris is celebrated worldwide, and it's often described as one of the most beautiful cities in the world.Paris is renowned for its magnificent architecture, which spans various styles and periods. Iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, Sacré-Cœur Basilica, and the Arc de Triomphe exemplify Parisian architectural excellence. The city's well-preserved historic buildings and grand boulevards add to its architectural charm.The city's winding streets, charming neighborhoods, and picturesque squares create an enchanting atmosphere. Montmartre's artistic ambiance, Le Marais' historic beauty, and the Latin Quarter's bohemian character are just a few examples of Paris's diverse and charming districts.");
}

function onclick2()
{
    document.write("London is a city known for its captivating beauty, which can be found in various aspects of its culture, history, architecture, and natural surroundings. Here are some aspects that contribute to the beauty of London. London is steeped in history, and its centuries-old buildings, such as the Tower of London, Westminster Abbey, and Buckingham Palace, exude an undeniable historical charm. The city's rich past is visible in its architecture, streets, and landmarks.London boasts a diverse architectural landscape, blending the old and the new. You'll find a mix of iconic landmarks, classic Georgian and Victorian townhouses, modern skyscrapers like The Shard, and innovative contemporary structures like the Gherkin. This architectural diversity adds to the city's allure.London's multicultural atmosphere is reflected in its diverse neighborhoods, each with its own unique character. Areas like Notting Hill, Chinatown, and Brick Lane showcase the city's cultural richness, adding vibrancy and beauty to the overall tapestry of London.");
}

function onclick3()
{
    document.write("Norway is renowned for its breathtaking natural beauty and offers a diverse range of scenic landscapes and attractions. Norway is one of the best places on Earth to witness the mesmerizing Northern Lights (Aurora Borealis). The vibrant colors dancing across the night sky, particularly in the northern regions, are a sight to behold.The Norwegian landscape is adorned with snow-capped mountains, including the iconic peaks of the Norwegian Fjords. Places like the Lofoten Islands and Jotunheimen National Park offer fantastic mountain vistas.Norway's pristine environment and low population density make it a haven for those seeking tranquility and fresh air. It's an ideal destination for relaxation and rejuvenation.");
}

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) { // Adjust the scroll threshold as needed
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });